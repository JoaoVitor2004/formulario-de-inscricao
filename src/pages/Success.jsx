import { Wrapper } from "../components/Wrapper.style"
import { Boxmessage, Iconsuccess, Title, Paragrafy, ButtonClose } from "./styles"
import Icon from '../assets/images/icon-success.svg'

export default function Success() {
    return(
        <Wrapper>
            <Boxmessage>
                <Iconsuccess src={Icon} alt="icon success"/>
                <Title>Thanks for subscribing!</Title>
                <Paragrafy>A confirmation email has been sent to ash@loremcompany.com. 
                Please open it and click the button inside to confirm your subscription.</Paragrafy>
                <ButtonClose href="/">Dismiss message</ButtonClose>
            </Boxmessage>
        </Wrapper>
    )
}