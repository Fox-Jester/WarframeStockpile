
import { Alert } from "react-bootstrap";


interface PageAlertProps{
    text: string,
    visible: boolean
   
}
function PageAlert({text, visible}: PageAlertProps){


   

    return(
        <Alert variant="warning" show={visible} className="page-alert" >{text}</Alert>
    )
}

export default PageAlert