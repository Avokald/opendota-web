import React from 'react';
import Cheese from '../Cheese';
import styles from './Footer.css';

const Footer = () => (
  <footer className={styles.footer}>
    <Cheese />
    <small className={styles.links}>
      An <a href="https://github.com/yasp-dota/yasp">open source</a> volunteer project
      &bull; <a href="/privacyterms">Privacy & Terms</a>
      &bull; Follow on <a href="https://twitter.com/yasp_dota"><i className="fa fa-twitter"></i></a>
      &bull; Join us on <a href="https://discord.gg/0o5SQGbXuWALMIGQ" target="_blank">Discord</a>
      &bull; Dota 2 API powered by <a href="http://store.steampowered.com/"><i className="fa fa-steam-square"></i></a>
      &bull; Parsing by <a href="https://github.com/skadistats/clarity">clarity</a>
      &bull; Wallpaper by <a href="http://css101.deviantart.com/">css101</a>
      &bull; Cheese icon by <a href="http://www.belcu.com">Belc</a> on <a href="http://www.flaticon.com">flaticon</a>
    </small>
  </footer>
);

export default Footer;

// tooltips();
// formatHtml();
