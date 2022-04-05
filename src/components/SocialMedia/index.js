import React ,{Component}  from "react";
import {SocialSession , Social , Icon , SocialPrag , Span , SpanInfo} from './style'
import axios from 'axios'
class SocialMedia extends Component{
     state = {
        social :[]
    }
    componentDidMount() {
        axios.get('js/data.json').then(res => {
            this.setState({
                social: res.data.social
            })
        })
    }

    render() {
        const { social } = this.state;
        const sociallist = social.map( socialitem => {
            return (
                 <Social key={socialitem.id} item={socialitem.id}>
                <Icon className={socialitem.icon}></Icon>
                <SocialPrag>
                    <Span className="info1">{socialitem.title}</Span>
                    <SpanInfo className="info2">{socialitem.body}</SpanInfo>
                </SocialPrag>
            </Social>
            )
        })
        return(
               <SocialSession>
               {sociallist}
              </SocialSession>

    )
   }
}
export default SocialMedia;