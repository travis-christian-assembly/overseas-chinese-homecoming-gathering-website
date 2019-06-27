import React from 'react'
import Layout from 'components/Layout'

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>About Us</h2>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <header className="major">
            <h2>
              About Homecoming Gathering
            </h2>
            <p>
              Homecoming gathering is a group of pastors and believers from nations who have been walking together — praying, worshipping, fellowshipping and crying out to God together to see the glory of God to come to this nation. It is open to the Body of Christ to walk together as family to whatever extent the Lord releases them to do so. Our heart is to embrace all believers, all denominations, and para-churches. And just like a family, we desire to walk together with each generation. Old and young alike, all have an important role to play in a family, and all are needed to make a family complete.
            </p>
            <br/>
            <p>
              Unlike a conference with pre-determined speakers and pre-set teachings, in a gathering believers answer a call from the Lord to come together to worship and wait before Him, posturing themselves to hear what the Spirit is saying to the Church. A team of seasoned mature leaders provides spiritual oversight and protection in the meetings, as they walk together to discern what the Lord is saying through the body and facilitate the working of the Holy Spirit.
            </p>
          </header>
        </div>
      </section>
    </article>
  </Layout>
)

export default IndexPage
