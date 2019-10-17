import React from 'react'
import { Skeleton, Switch, Card, Icon, Avatar, List } from 'antd';

const { Meta } = Card;

export default class CardComponent extends React.Component{

	state = {
	    loading: true,
  	};

  	data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
];

  onChange = checked => {
    this.setState({ loading: !checked });
  };

  cardView = () =>{
  	const { loading } = this.state;
  	return (
  		<Card
          style={{ marginTop: 16 }}
          actions={[
            <Icon type="setting" key="setting" />,
            <Icon type="edit" key="edit" />,
            <Icon type="ellipsis" key="ellipsis" />,
          ]}
        >
          <Skeleton loading={loading} avatar active>
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title="Card title"
              description="This is the description"
            />
          </Skeleton>
        </Card>);
  }

  render() {
	const { loading } = this.state;
    return (
     <div>
     	<h1>Hello World</h1>
	     <Switch checked={!loading} onChange={this.onChange} />
	     <List
		    grid={{ gutter: 16, column: 3 }}
		    dataSource={this.data}
		    renderItem={item => (
		      <List.Item>
		       {this.cardView()}
		      </List.Item>
		    )}
		 />
     </div>
    );
  }
}