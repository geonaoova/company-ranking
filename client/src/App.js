import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  Tabs,
  Tab,
  Button,
  Select,
  MenuItem,
  Grid
} from '@material-ui/core';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import PublishIcon from '@material-ui/icons/Publish';
import TabPanel from './components/tab-panel/index';
import GlobalStyle from './styles/global'
import FileList from './components/file-list/index'
import Header from './components/header/index'

import Upload from './components/upload/index'
import RankingTable from './components/table/index'
import api from './service/api';
import AlertDialog from './components/modal';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.papper
  },
  panel: {
    height: '100%'
  },
  footer: {
    textAlign: 'center',
    marginTop: 50
  }
}));

export default function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [uploadedFiles, setUploadedFiles] = React.useState([]);
  const [selectedCompany, setSelectedCompany] = React.useState(0);
  const [companies, setCompanies] = React.useState([{ id: 0, name: '', score: 0 }]);
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [modalContent, setModalContent] = React.useState({title: '', description: ''});

  useEffect(() => {
    api.get('/companies')
      .then(response => {
        const ordenedCompanies = response.data
          .sort((c1, c2) => sortCompany(c1, c2))
        setCompanies(ordenedCompanies)
      });
  }, [value])

  const sortCompany = (company1, company2) => {
      if (company1.score < company2.score) {
        return 1
      }

      if (company1.score > company2.score) {
        return -1
      }

      return 0
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleUpload = files => {
    setUploadedFiles(files);
  }

  const handleDelete = () => {
    setUploadedFiles([]);
  };

  const a11yProps = (index) => {
    return {
      id: `scrollable-force-tab-${index}`,
      'aria-controls': `scrollable-force-tabpanel-${index}`,
    }
  }

  const submitCsv = () => {
    const data = new FormData();

    data.append('companyId', String(selectedCompany));
    data.append('file', uploadedFiles[0]);

    api.post('upload', data).then(() => {
      setModalContent({title: "Sucesso!", description: "Upload realizado com sucesso."})
    }).catch(() => {
      setModalContent({title: "Ops...", description: "Parece que houve um erro no upload do arquivo"})
    }).finally(() => {
      setSelectedCompany(0);
      setUploadedFiles([]);
      setModalIsOpen(true);
    });
  }

  return (
    <>
      <AlertDialog onCloseModal={setModalIsOpen} isOpen={modalIsOpen} content={modalContent}/>
      <Header />
      <Paper className={classes.root}>
        <GlobalStyle />
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          scrollButtons="on"
          indicatorColor="secondary"
          textColor="secondary"
        >
          <Tab label="Ranking" icon={<FormatListNumberedIcon />} {...a11yProps(0)} />
          <Tab label="Upload" icon={<PublishIcon />} {...a11yProps(1)} />
        </Tabs>
      </Paper>
      <TabPanel value={value} index={0} className={classes.panel}>
        <RankingTable value={companies} />
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.panel}>
        <Upload onUpload={handleUpload} />
        <div>
          {!!uploadedFiles.length && (
            <FileList files={uploadedFiles} onDelete={handleDelete} />
          )}
        </div>

        <footer className={classes.footer} >
          <Grid container item xs={12} justify="space-between" spacing={2}>
            <Grid item xs={6}>
              <Select
                value={selectedCompany}
                label="Empresa"
                fullWidth
                onChange={event => setSelectedCompany(event.target.value)}
                color="secondary"
              >
                <MenuItem value={0}>Escolha uma empresa</MenuItem>
                {companies.map(company => (
                  <MenuItem key={company.id} value={company.id}>{company.name}</MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={6}>
              <Button type="button" onClick={submitCsv} disabled={!selectedCompany || uploadedFiles.length < 1} fullWidth variant="contained" color="secondary">
                Enviar
              </Button>
            </Grid>
          </Grid>
        </footer>
      </TabPanel>
    </>
  );
}