import React from 'react'
import Layout from 'components/Layout'

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Giving</h2>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <h2>Giving</h2>
          <header>
            <h5>Check</h5>
            <p>
              Please write your offering check to <b><i><u>Travis Christian Assembly</u></i></b> with <b><i><u>"Overseas Chinese Homecoming Gathering"</u></i></b> as memo, and mail it to the following address:
            </p>
          </header>
          <p>
            <b>
              Travis Christian Assembly<br/>
              8304 East US Hwy 290<br/>
              Austin, TX 78724<br/>
              USA
            </b>
          </p>
          <header>
            <h5>Zelle</h5>
            <p>
              Please type in <b><i><u>chase@tcaweb.org</u></i></b> as the recipient for your Zelle payments (e.g. via Chase QuickPay), and type in <b><i><u>"Overseas Chinese Homecoming Gathering"</u></i></b> as notes.
            </p>
          </header>
          <header>
            <h5>PayPal</h5>
            <p>
              Click the button below to give via Paypal. Both credit cards and debit cards are accepted.
            </p>
            <a className="button primary" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PS6U4A9K67WBS&source=url" target="_blank" rel="noopener noreferrer">Give via PayPal</a>
          </header>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
