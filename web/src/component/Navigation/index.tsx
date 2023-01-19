import shepherd from "../../service/shepherd";
import idiotproof from "../../service/idiotproof";

import Search from "../../svg/Search";

import styles from "./index.module.scss";

export default function Navigation(properties: Properties) {
  const id = [`_${idiotproof.trace(Navigation)}`, properties.id].join();
  const cl = [styles.index, properties.className].join(" ");
  console.log(styles);
  return (
    <div id={id} className={cl}>
      <div onClick={() => shepherd.whip("test", "NewsletterPage")}>
        Newsletter
      </div>
      <div onClick={() => shepherd.whip("test", "QuestionPage")}>Question</div>
      <div onClick={() => shepherd.whip("test", "ProfilePage")}>Profile</div>
      <div onClick={() => shepherd.whip("test", "Setting")}>Setting</div>
      {/* <div>
        <Search className={styles.search_svg} />
      </div> */}
      <div onClick={() => shepherd.whip("test", "WelcomePage")}>
        WelcomePage
      </div>
    </div>
  );
}
