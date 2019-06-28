module.exports = {
  'Test Home Page' : function (client) {
    client.url(client.launch_url)

    client.source((result) => {
        // Source will be stored in result.value
        console.log('----------------------------');
        console.log('Page source:');
        console.log(result.value);
        console.log('----------------------------');
      })

    // Assert page title
    client.assert.title('Overseas Chinese Homecoming Gathering').end

    // Assert nav bar behavior
    client
      .assert.elementPresent('nav')
      .assert.elementNotPresent('div.is-menu-visible')
      .click('nav')
      .pause(1000)
      .assert.elementPresent('div.is-menu-visible')
      .assert.elementPresent('a.close')
      .click('a.close')
      .pause(1000)
      .assert.elementNotPresent('div.is-menu-visible')
      .end
  }
}
