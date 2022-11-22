import React from 'react';
import Card from "react-bootstrap/Card";
export default class cria extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="table-wrapper" style={{ marginTop: 100 }}>
                <Card style={{ width: "100" }}>
                    <Card.Img
                        variant="top"
                        src="https://scontent.fbaq8-1.fna.fbcdn.net/v/t1.6435-9/200253734_524552372238124_8448466327170354968_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeFQfz2GoCHjDp7yrKauV99YM-yioWsK6ncz7KKhawrqd35g_gT6clfrh_nIyDdgHnkumq6pn-BeTS1hXSGsRO_t&_nc_ohc=ApcpGfG2dMUAX-wjoca&_nc_ht=scontent.fbaq8-1.fna&oh=00_AfBzaYgsfeByryzstvxngFFxkAmYQA3a-vJNvToegowC1g&oe=63A249D0"
                    />
                </Card>                
            </div>
        )
    }
}
