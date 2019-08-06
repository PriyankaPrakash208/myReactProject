import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () =>{
    return (
        <div className="ui container comments">
             <ApprovalCard>
                 <div>
                    <h4>Warning !!!</h4>
                    Are You Sure You Want To Do This?
                 </div>
                
            </ApprovalCard>
            <ApprovalCard>
                < CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4:30 PM" 
                    post="Wow!!!" 
                    profile={faker.image.avatar()} 
                />
            </ApprovalCard>
            <ApprovalCard>
                < CommentDetail 
                    author="Alex" 
                    timeAgo="Today at 3:30 PM" 
                    post="Good Job Buddyyy!!!" 
                    profile={faker.image.avatar()} 
                />
            </ApprovalCard>
            <ApprovalCard>
                < CommentDetail 
                    author="Jane" 
                    timeAgo="Today at 1:00 PM" 
                    post="Nice One!!"
                    profile={faker.image.avatar()} 
                />
            </ApprovalCard>
           
        </div>
    );

}

ReactDOM.render(<App/>,document.querySelector('#root'));