import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetails from './CommentDetails';
import ApprovalCard from './ApprovalCard';
const App= () =>{
	return (
		<div className="ui comments">
			<ApprovalCard>
  			<CommentDetails
  			 author="Sam curran" 
  			 time="just now" 
  			 comment="Have a nice day!!" 
  			 image={faker.image.avatar()}
  			 />
  			 </ApprovalCard>
  			 <ApprovalCard>
  			<CommentDetails 
  			author="Alex Hales" 
  			time="today at 10:00pm" 
  			comment="Good day buddy!!" 
  			image={faker.image.avatar()}
  			/>
  			</ApprovalCard>
  			<ApprovalCard>
  			<CommentDetails 
  			author="Jason roy" 
  			time="Yesterday at 9:00pm" 
			comment="Nice work" 
			image={faker.image.avatar()}
			/>
			</ApprovalCard>
			<ApprovalCard>
  			<CommentDetails 
  			author="Joe root" 
  			time="just now" 
  			comment="Hello!!" 
  			image={faker.image.avatar()}
  			/>
  			<CommentDetails 
  			author="Eoin morgan" 
  			time="today at 5:00pm" 
  			comment="Get well soon" 
  			image={faker.image.avatar()}
  			/>
  			</ApprovalCard>
		</div>
		);
};

ReactDOM.render(<App/>,document.querySelector('#root'));