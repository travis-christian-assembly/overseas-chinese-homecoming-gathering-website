import React from 'react'
import Layout from 'components/Layout'
import Scroll from 'components/Scroll'

import config from 'root/config'
import pic_giving from 'assets/images/giving.jpg'

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>Upcoming Gatherings</h2>
        </header>
        <ul className="upcoming-gatherings">
          <li className="icon solid fa-car">
            <h3>Hong Kong</h3>
            <p>
              July 24 - July 27, 2019
              <br/>
              Asia World-Expo, Hong Kong
            </p>
            <a href="/#" className="button small primary">Register</a>
          </li>
          <li className="icon solid fa-city">
            <h3>New York, NY</h3>
            <p>
              November 1 - November 4, 2019
              <br/>
              Madison Square Garden, New York, NY
            </p>
            <a href="/#" className="button small primary">Register</a>
          </li>
          <li className="icon solid fa-pizza-slice">
            <h3>Chicago, IL</h3>
            <p>
              April 20 - April 23, 2020
              <br/>
              United Center, Chicago, IL
            </p>
            <a href="/#" className="button small primary">Register</a>
          </li>
        </ul>
      </div>
    </section>

    <section id="two" className="wrapper style2">
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

    <section id="three" className="wrapper alt style5">
      <section className="spotlight">
        <div className="image">
          <img src={pic_giving} alt="" />
        </div>
        <div className="content">
          <h2>Giving</h2>
          <header>
            <h5>Check</h5>
            <p>
              Please write your offering check to <b><i><u>Travis Christian Assembly</u></i></b> with <b><i><u>"Overseas Chinese Homecoming Gathering"</u></i></b> as memo, and mail it to the following address:
              <br/>
              <br/>
              <b>
                Travis Christian Assembly
                <br/>
                8304 East US Hwy 290
                <br/>
                Austin, TX 78724
                <br/>
                USA
              </b>
            </p>
          </header>
          <header>
            <h5>Zelle</h5>
            <p>
              Please type in <b><i><u>chase@tcaweb.org</u></i></b> as the recipient for your Zelle payments (e.g. via Chase QuickPay), and type in <b><i><u>"Overseas Chinese Homecoming Gathering"</u></i></b> as notes.
            </p>
          </header>
          <header>
            <h5>PayPal</h5>
            <p>
              <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PS6U4A9K67WBS&source=url">Click here</a> to give via Paypal. Both credit cards and debit cards are accepted.
            </p>
          </header>
        </div>
      </section>
    </section>
  </Layout>
)

export default IndexPage
