import shepherd from "../../service/shepherd";
import idiotproof from "../../service/idiotproof";

import Search from "../../../svg/Search";

import styles from './index.module.scss';


export default function Navigation(properties: Properties) {
    const id = [`_${idiotproof.trace(Navigation)}`, properties.id].join();
    const cl = [styles.index, properties.className].join(" ");
    console.log(styles)
    return <div id={id} className={cl}>
        <div onClick={() => shepherd.whip("test", "jongseok")}>
            js
        </div>
        <div>
            <Search className={styles.search_svg}/>
        </div>
        <div onClick={() => shepherd.whip("test", "younghoon")}>
            yh
        </div>
        <div onClick={() => shepherd.whip("test", "sangjin")}>
            sj
        </div>
        <div onClick={() => shepherd.whip("test", "wonjae")}>
            wj
        </div>
    </div>
}
