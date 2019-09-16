import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import ImageTwo from "../components/imageTwo"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* slide 1 start */}
    <section className="slide1" id="home">
    <h1>Welcome</h1>
    <a href="#about">About true money</a>
    </section>
    {/* slide 1 end */}
    {/* slide 2 start */}
    <section className="slide3" id="about">
      <h2 className="ha2">About</h2>
    <p className="descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
    <div alt="TrueMoney" className="image" style={{ maxWidth: `540px`, marginBottom: `1.45rem` }}>
    <ImageTwo /> </div>
    </section>
    {/* slide 2 end */}
    {/* slide 3 start */}
    <section className="slide4" id="options">
    <h2 className="ha2">Options</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
    <div alt="TrueMoney" className="image" style={{ maxWidth: `540px`, marginBottom: `1.45rem` }}>
    <ImageTwo /> </div>
    </section>
    {/* slide 3 end */}
    {/* slide 4 start */}
    <section className="slide3" id="faqs">
    <h2 className="ha2">FAQs</h2>
    <div className="descr">
    <h3>What is true money?</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
<h3>How can I get truemoney?</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p></div>
    <div alt="TrueMoney" className="image" style={{ maxWidth: `540px`, marginBottom: `1.45rem` }}>
    <ImageTwo /> </div>
    </section>
    {/* slide 4 end */}
  </Layout>
)

export default IndexPage
