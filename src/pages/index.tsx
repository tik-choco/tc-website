import * as React from "react"
import { MDXProvider } from "@mdx-js/react"
import type { HeadFC, PageProps } from "gatsby"

import Intro from "../../content/intro.mdx"
import About from "../../content/about.mdx"
import World from "../../content/world.mdx"
import Download from "../../content/download.mdx"

import Header from "../components/Header"
import Footer from "../components/Footer"
import News from "../components/News/News"

import { Container, createTheme, ThemeProvider, Typography } from "@mui/material"
import { blue, red } from "@mui/material/colors"
const theme = createTheme({
  typography: {
    fontFamily: [
      // 'sans-serif',
      'Yu Gothic',
      'monospace',
    ].join(','),
  },
  palette: {
    primary: {
      main: blue[500],
    },
  },
});

const IndexPage: React.FC<PageProps> = () => {
  const [pageNum, setPageNum] = React.useState("1");
  const [page, setPage] = React.useState(
    {
      "Home": <Intro />,
      "Download": <Download />,
      "About": <About />,
      "World": <World />,
    }
  )
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container maxWidth="sm">

          <Header page={page} pageNum={pageNum} setPageNum={setPageNum} />

          <Typography>
            {Object.values(page)[parseInt(pageNum) - 1]}
          </Typography>

          <News />

          <Footer />
        </Container>
      </ThemeProvider>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>TikChocoOnline</title>
