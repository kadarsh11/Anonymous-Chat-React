import React from 'react'
import PubNubReact from 'pubnub-react';

import { Input, Tooltip, Icon, Button, Layout, Row, Col, Card, Avatar} from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const { TextArea } = Input;
const { Meta } = Card;

export default class Chat extends React.Component{

	state={
		is_chat_active:false,
		join_id:"",
		name:"",
		msg:"",
		chat:[]
	}

	constructor(props) {
	 super(props);
	 	this.initializePubNub()
	}

    connect=()=>{
    	let {join_id,name}=this.state

    	 this.pubnub.subscribe({
            channels: [join_id,`${join_id}-data`]
        });
  
        this.pubnub.getMessage(join_id, (msg) => {
            let ui=null;
            let chats=this.state.chat
            if(msg.message.by == name){
            	ui = <Row style={{'marginBottom':'10px'}} key={msg.timmetoken}>
			      <Col span={12}></Col>
			      <Col span={12} style={{'backgroundColor':'pink'}}>{msg.message.msg}</Col>
			    </Row>
            }else{
            	ui= <Row style={{'marginBottom':'10px'}} key={msg.timmetoken}>
				      <Col span={12} style={{'backgroundColor':'pink'}}>{msg.message.msg}</Col>
				      <Col span={12}></Col>
				    </Row>
            }
            chats.push(ui)
            this.setState({
            	chat:chats
            })
        });
    }

    initializePubNub(){
    	this.pubnub = new PubNubReact({
            publishKey: 'pub-c-c64d0b2d-2349-4e51-9231-b04f77fa59b2',
            subscribeKey: 'sub-c-360a7838-eebc-11e9-bdee-36080f78eb20'
        });
        this.pubnub.init(this);
    }

	send=()=>{
		let {msg,name,join_id}=this.state
		console.log("CONNECT",msg)
		this.pubnub.publish(
		    {
		        message: {
		            by: name,
		            msg: msg
		        },
		        channel: join_id,
		        sendByPost: false, 
		        storeInHistory: false
		    },
		    (status, response) => {
		    	console.log("My Response",response)
		    }
		)
	}



	renderChatScreen=()=>{

		return (
				<div style={{'backgroundColor':"#ecf0f1",'height':'100vh','margin':'auto'}}>
					<Layout>
				      <Header style={{'color':'white',height:'60px'}}>Chat anonymous</Header>
				      <Layout style={{'height':'89vh'}}>
				        <Sider style={{'padding-left':'5px','padding-right':'5px'}}>
							<Meta
								style={{'backgroundColor':"#ecf0f1",'border-radius':'5px','margin-top':'10px'}}
								avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
								title="Adarsh Kumar"
								// description="Joined at 19:17:23PM "
							/>
							<Meta
								style={{'backgroundColor':"#ecf0f1",'border-radius':'5px','margin-top':'10px'}}
								avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
								title="Phoolan"
								// description="Joined at 19:17:23PM"
							/>
				        </Sider>
				        <Content>
				        	<div style={{'margin':'10px','height':'100%'}}>
				        		<div style={{'margin':'10px','backgroundColor':'orange','height':'90%'}}>
				        				{this.state.chat}
				        		</div>
				        		<Row>
									<Col span={20}>
										<TextArea
										  onChange={(_)=>this.state.msg=_.target.value}
									      placeholder="Enter your message"
									      autoSize={{ minRows: 2, maxRows: 4 }}
									    /> 
									</Col>
									<Col span={4}>
										<Button type="primary" onClick={()=>this.send()}>Send</Button>
										{
											// <Button type="primary" onClick={()=>this.send("phoolan")}>Send by Phoolan</Button>
											// <Button type="primary" onClick={this.connect}>Connect</Button>
										}
										
									</Col>
				        		</Row>
				        	</div>
				        </Content>
				      </Layout>
				    </Layout>
				</div>
			)
	}

	onConnect=()=>{
		let {name, msg}=this.state

		this.pubnub.publish(
		    {
		        message: {
		            by: name,
		            msg: msg+name
		        },
		        channel: '1111',
		        sendByPost: false, 
		        storeInHistory: false, 
		        meta: {
		            "cool": "meta"
		        } 
		    },
		    (status, response) => {
		    	console.log("My Response",response)
		    	console.log("My Response",status)
		    }
		)
		// this.setState({
		// 	is_chat_active:true
		// })
	}

	renderJoinScreen=()=>{
		return (
			<div style={{'backgroundColor':"#ecf0f1",'height':'100vh','margin':'auto'}}>
					<div style={{'width':'30%','padding-vertical':'20px'}}>
						<Input
						  onChange={(_)=>this.state.name=_.target.value}
					      placeholder="Your good name"
					      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
					      suffix={
					        <Tooltip title="Extra information">
					          <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
					        </Tooltip>
					      }
					    />
						<Input
						  onChange={(_)=>this.state.join_id=_.target.value}
					      placeholder="Enter Joining Number"
					      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
					      suffix={
					        <Tooltip title="Extra information">
					          <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
					        </Tooltip>
					      }
					    />	
					    <Button onClick={()=>{
					    	this.connect()
					    	this.setState({is_chat_active:true})
					    }} type="primary" style={{'margin-top':'20px'}}>Primary</Button>
					</div>
					
			</div>
			)
	}

	render(){
		let { is_chat_active } = this.state
		return(
			<div>
				{ is_chat_active ? this.renderChatScreen() : this.renderJoinScreen()}

			</div>
		)
	}
}