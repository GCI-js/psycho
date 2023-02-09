import shepherd from "../../service/shepherd";
import idiotproof from "../../service/idiotproof";

import Search from "../../svg/Search";

import styles from "./index.module.scss";

export default function Navigation(properties: Properties) {
  const id = [`_${idiotproof.trace(Navigation)}`, properties.id].join();
  const cl = [styles.index, properties.className].join(" ");
  return (
    <div id={id} className={cl}>
      <div onClick={() => shepherd.whip("test", "NewsletterPage")}>
        newsletter
      </div>
      <div onClick={() => shepherd.whip("test", "QuestionPage")}>question</div>
      <div onClick={() => shepherd.whip("test", "ProfilePage")}>profile</div>
      <div onClick={() => shepherd.whip("test", "Setting")}>setting</div>
      <div>
        <Search className={styles.search_svg} />
      </div>
    </div>
  );
}
