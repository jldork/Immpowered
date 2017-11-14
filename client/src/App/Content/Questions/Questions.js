import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import './Questions.css';

@inject("store")
@observer
export default class Questions extends Component {
    onChange = (event) => {
        this.props.store.set_career(event.target.innerText);
    }
    getResults = () => {
        this.props.store.get_results()
    }
    render() {
        const card_style = {
            width: '600px',
            transitionDuration: '0.3s',
            height: '700px',
            padding: '26px'
        }
        const radio_style = {
            paddingTop: '10px'
        }
        return (
            <div className="questions">
                <Card style={card_style}>
                    <CardTitle title="English Level" style={{padding: '10px 0'}} />
                    <div className="question">
                        <label>Here is a question with some text to make it less empty</label>
                        <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
                            <RadioButton
                                value="light"
                                label="Simple"
                                style={radio_style}
                            />
                            <RadioButton
                                value="not_light"
                                label="Selected by default"
                                style={radio_style}
                            />
                        </RadioButtonGroup>
                    </div>
                    <div className="question">
                        <label>Here is a question</label>
                        <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
                            <RadioButton
                                value="light"
                                label="Simple"
                                style={radio_style}
                            />
                            <RadioButton
                                value="not_light"
                                label="Selected by default"
                                style={radio_style}
                            />
                        </RadioButtonGroup>
                    </div>
                    <div className="question">
                        <label>Here is a question</label>
                        <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
                            <RadioButton
                                value="light"
                                label="Simple"
                                style={radio_style}
                            />
                            <RadioButton
                                value="not_light"
                                label="Selected by default"
                                style={radio_style}
                            />
                        </RadioButtonGroup>
                    </div>
                    <div className="question">
                        <label>Here is a question</label>
                        <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
                            <RadioButton
                                value="light"
                                label="Simple"
                                style={radio_style}
                            />
                            <RadioButton
                                value="not_light"
                                label="Selected by default"
                                style={radio_style}
                            />
                        </RadioButtonGroup>
                    </div>
                    <RaisedButton label="Submit" primary={true} onClick={this.getResults}/>
                </Card>
            </div>
        );
    }
}