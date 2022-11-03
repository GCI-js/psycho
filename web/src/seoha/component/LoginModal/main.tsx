import * as React from "react";

import bodyguard from "../../service/bodygoard";
import shepherd from "../../service/shepherd";

import Button from "../Button/main";
import Box from "../Box/main";

import './main.scss';


export default function LoginModal() {
    console.log("<LoginModal/>");

    const modal_ref = React.useRef(null);
    const ip_ref = React.useRef(null);
    const name_ref = React.useRef(null);
    const pw_ref = React.useRef(null);
    const msg_ref = React.useRef(null);

    function run() {
        const msg: HTMLDivElement = msg_ref.current;
        const cls = msg.classList;
        if (!bodyguard.checkPermission(name_ref.current.value,
                                       pw_ref.current.value)
        ) {
            cls.remove("success");
            cls.add("failure");
            msg.innerText = "invalid username or password";
            return;
        }
        cls.remove("failure");
        cls.add("success");
        msg.innerText = "success";
        shepherd.setLocation("main");
    }
    
    function runFlow1() {
        const elem = modal_ref.current;
        elem.classList.add("appear");
        setTimeout(runFlow2, 1000);
    }
    function runFlow2() {
        const elem = ip_ref.current;
        elem.classList.add("unfold");
        setTimeout(runFlow3, 400);
    }
    function runFlow3() {
        const elem = ip_ref.current.childNodes[0];
        elem.classList.add("appear-detail");
    }
    
    React.useEffect(runFlow1, []);
    return React.useMemo(() =>
        <Box ref={modal_ref} className="login-modal">
            <span>nice to meet you</span>
            <span>please login to system</span>
            <div className="ip-group" ref={ip_ref}>
                <div>
                    <div>
                        <input ref={name_ref} type="text" placeholder="name"/>
                        <input ref={pw_ref}
                            type="password" placeholder="password"/>
                    </div>
                    <Button className="button" onClick={run}>
                        login
                    </Button>
                </div>
            </div>
            <span ref={msg_ref} className="msg-box"></span>
        </Box>
    , []);
}
