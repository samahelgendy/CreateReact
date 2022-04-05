import React , {Component} from "react";
import axios from 'axios'
import {PortfolioSession , PortfolioTitle , Span , PortfolioList , PortfolioItem , Div ,Img , Overlay , OverlaySpan} from './style'
class Portfilo extends Component {
    state = {
        images:[]
    }
    componentDidMount() {
        axios.get("js/data.json").then(res => {
            this.setState({
                 images:res.data.portfolio
             })
        })
    }

    render() {
        const { images } = this.state
        const imageslist = images.map( imagesitem => {
            return (
                 <Div key={imagesitem.id}>
                    <Img src={imagesitem.image} alt="" />
                    <Overlay>
                        <OverlaySpan>
                            Show Image
                        </OverlaySpan>
                    </Overlay>
                </Div>
            )
        })
        return (
            
             <PortfolioSession>
            <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
            <PortfolioList>
                <PortfolioItem active>All</PortfolioItem>
                <PortfolioItem>HTML</PortfolioItem>
                <PortfolioItem>Photoshop</PortfolioItem>
                <PortfolioItem>Wordpress</PortfolioItem>
                <PortfolioItem>Mobile</PortfolioItem>
            </PortfolioList>
            
                <div classame="box">
                    {imageslist}
            </div>
            </PortfolioSession>
        )
    }
}
export default Portfilo;