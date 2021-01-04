import React, { useRef, useState } from "react";
import {useIsVisible} from "./useIsVisible"
import { Fade } from "@material-ui/core";


function FadeComponent(props) {
    const rootRef = useRef();
	const visible = useIsVisible({ element: rootRef });
	const [show, setShow] = useState(false);

    console.log("fade");
	if (!show && visible) setShow(true);
	return (
		<div>
			<Fade in={show} ref={rootRef} style={{ transitionDuration: "1000ms" }}>
				{props.children}
			</Fade>
		</div>
	);
}

/*FadeComponent.propTypes = {

}*/

export default FadeComponent;
