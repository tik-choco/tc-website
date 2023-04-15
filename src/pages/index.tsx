import * as React from "react"
import { MDXProvider } from "@mdx-js/react"
import type { HeadFC, PageProps } from "gatsby"
import gfm from "remark-gfm";

import Intro from "../../content/intro.mdx"
import About from "../../content/about.mdx"
import World from "../../content/world.mdx"
import Download from "../../content/download.mdx"

import Header from "../components/Header"
import Footer from "../components/Footer"
import News from "../components/News/News"

import { Container, createTheme, ThemeProvider, Typography } from "@mui/material"
import { blue, red } from "@mui/material/colors"
import Catchphrase from "../components/Catchphrase"
import RequirementTable from "../components/RequirementTable"

import { FaDiscord } from 'react-icons/fa';
import { Button } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: [
      // 'sans-serif',
      'Yu Gothic',
      'monospace',
    ].join(','),   
    allVariants: {
      color: 'rgb(44, 86, 75)' 
    } 
  },
  palette: {
    primary: {
      main: "rgb(95, 176, 157)",
    },    
  },  
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          // backgroundColor: '',
          // color: 'skyblue', // tabの文字色
          fontWeight: 'bold',
          // fontSize: 20, // tabの文字サイズ
        },        
      },
    },
  },
});

const IndexPage: React.FC<PageProps> = () => {
  const [pageNum, setPageNum] = React.useState("1");
  const [page, setPage] = React.useState(
    {
      "Home": <About components={{Catchphrase: Catchphrase, News: News}} />,
      // "About": <About components={{Catchphrase: Catchphrase, News: News}} />,
      "Download": <Download components={{RequirementTable:RequirementTable}}/>,
      // "World": <World />,
    }
  )
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <Header page={page} pageNum={pageNum} setPageNum={setPageNum} />
          
          {/* <Catchphrase /> */}

          <Typography component={'div'}>
            {Object.values(page)[parseInt(pageNum) - 1]}
          </Typography>

          {/* <News /> */}
          <br />
          <Button
            variant="contained"
            color="primary"
            sx={{ backgroundColor: '#7289da', color: 'white'}}
            href={"https://discord.gg/bkadn73aCJ"} 
            target="_blank"
          >
            <FaDiscord />
            Join Discord
          </Button>

          <Footer />
        </Container>
      </ThemeProvider>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>TikChocoOnline</title>
