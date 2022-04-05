import React ,{Component} from "react";
import {WorkSession , WorkTitle , Span , Part , Icon ,PartTitle ,Line ,PartDesc} from './style'
import axios from 'axios'
class Work extends Component {

    state = {
        works:[]
    }

    componentDidMount() {
        axios.get("js/data.json").then(res => {
            this.setState({
                 works:res.data.works
             })
        })
    }
        
    render() {
        const { works } = this.state;
        const worklist = works.map(workitem => {
            return (
                 <Part first ={workitem.id} key={workitem.id}>
                    <Icon className={workitem.icon_name}></Icon>
                    <PartTitle>{workitem.title}</PartTitle>
                    <Line />
                    <PartDesc>
                        {workitem.body}
                    </PartDesc>
                </Part>
            )
        })
         return(
        <WorkSession>
            <div className="container">
                <WorkTitle><Span>My</Span> Work</WorkTitle>
                {worklist}
            </div>
        </WorkSession>
    )
   }
}
export default Work;