import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import ResultStore from '../Results.Store';
import { Carousel } from 'react-responsive-carousel';

@observer
export default class Results extends Component {
    render() {
        const card_style = {
            transitionDuration: '0.3s',
            height: '100%',
            width: '80%'
        }
        const subtext = "Brooklyn Workforce Innovations has eight specialized training programs for different job sectors. You’ll get hands-on experience and job placement support for up to two years after graduation. Not sure where to look first? Answer these three questions and we can help you get started on your search for the right program."
        return (
            <Carousel className="carousel" centerMode={true} showArrows={true} infiniteLoop={true} useKeyboardArrows={true}>
                <Card style={card_style}>
                    <CardTitle title="Brooklyn Workforce Innovations" subtitle={"BWI helps jobless and working poor New Yorkers establish careers."} />
                    <CardText>{subtext}</CardText>
                    <CardActions>
                        <FlatButton label="Prev" primary={true} onClick={ResultStore.next_result} />
                        <FlatButton label="Next" primary={true} onClick={ResultStore.next_result} />
                    </CardActions>
                </Card>
                <Card style={card_style}>
                    <CardTitle title="Brooklyn Workforce Innovations" subtitle={"BWI helps jobless and working poor New Yorkers establish careers."} />
                    <CardText>{subtext}</CardText>
                    <CardActions>
                        <FlatButton label="Prev" primary={true} onClick={ResultStore.next_result} />
                        <FlatButton label="Next" primary={true} onClick={ResultStore.next_result} />
                    </CardActions>
                </Card>
                <Card style={card_style}>
                    <CardTitle title="Brooklyn Workforce Innovations" subtitle={"BWI helps jobless and working poor New Yorkers establish careers."} />
                    <CardText>{subtext}</CardText>
                    <CardActions>
                        <FlatButton label="Prev" primary={true} onClick={ResultStore.next_result} />
                        <FlatButton label="Next" primary={true} onClick={ResultStore.next_result} />
                    </CardActions>
                </Card>
            </Carousel>
        );
    }
}


