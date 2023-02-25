import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import {Seo} from "../components/seo"

const AboutPage = () => (
  <Layout>
    <div className="container  my-5">

      <div className="container">
      <StaticImage
            src="../images/title_about.png"
            width={500}
            quality={95}
            formats={["AUTO", "WEBP"]}
            alt="about"
            className="img-fluid"
          />
        <p>
        「TikChoco Online」は、異世界で自由に生活できるサンドボックスオンラインゲームです。
        </p>
        <StaticImage
            src="../images/title_prologue.png"
            width={500}
            quality={95}
            formats={["AUTO", "WEBP"]}
            alt="prologue"
            className="img-fluid"
          />
        <p>
        遥か昔、大いなる世界樹を巡り大陸中を巻き込んで繰り広げられた「千年戦争」「七つの大罪」と呼ばれる恐るべき悪魔達が率いる軍勢を前に、<br></br>
        人々は種族の垣根を越えて手を取り合い遂には封印を施し戦争は終結した暗く陽の射さない日々を越えて訪れた平和に誰もが歓喜し打ち震えただが、<br></br>
        幾年もの月日が流れると共に人々の記憶は風化しもはやかつての戦争を語る者などいなかったそんな時、<br></br>
        地上に現れた「パンドラの箱」が引き金となりそれぞれの思惑が噛み合うように、物語は動き出したのだった…
        </p>
      </div>
      <Link to="/">トップへ</Link>
    </div>
  </Layout>
)

export default AboutPage

export const Head = () => (
    <Seo title="About Gatsby Bootsrap 5 starter" />
)