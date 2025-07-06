import React, { useState } from 'react';
import './App.css';

const messages = [
  "I’m really sorry for hurting you. I never wanted things to turn out like this, and it hurts knowing I made you feel that way. Thanks for not completely shutting me out, even though I messed up. I don’t say it enough, but you really mean a LOTT to me",
  
  "I should've never said those things, especially knowing you were already feeling low with everything going on at your home. You were just trying to hold it all together, and I added to your burden. That was stupid of me. I really am sorry, Jiyaa.", 
  
  "I don't even know what I was trying to prove yesterday. I just kept talking over you, not thinking, not listening, just wanting to be right. I'm really sorry. You didn't deserve that. Thank you for your patience and for not walking away from someone acting like a fool.", 
  
  "Yesterday was just... a lot. Both of us were already drained, and then that Leetcode thing just made it worse. I think it all built up and I let it out the wrong way. I said things I never meant, and I regret it. I'm sorry for letting frustration speak louder than love. And thank you for still being there. <3", 
  
  "Also, SPAM had nothing to do with what I said. No one ever told me that you felt like an outsider. I think Akki just reacted based on some old bad experiences (nikil n guna) . Still, that doesn't excuse me. I was wrong. I'm sorry. And THANK YOUU, seriously, for trying so hard with them. You never let language or awkwardness stop you for being togeather with them, and that says so much about the kind of person you are. I miss seeing you laugh with them. I just want things to feel whole again, even if it takes time.", 
  
  "I know I keep bringing up \"your trauma\" like I fully get it ,but I don't. And I hate that I spoke about it so casually, like it was just something to win an argument. I'm so sorry, Jiya. You've come so far and fought so much to be where you are. Thank you for holding yourself together even when I wasn't doing the same. You were following our fight wala promise yesterday", 
  
  "You shouldn't have to change yourself just to fit into my world. I see now, that there are so many things you've been adjusting and compromising, things I didn't even notice. And I hate that I've been so blind to all of it. I'm really sorry. And thank you for every bit of effort you've made for me.", 
  
  "Thank you for being you, Jiya Dosuja. You're not just someone I love, you're FAMILY to me. I know I've acted immaturely, said things I shouldn't have. I AM SORRYY . I'll do better, not just for you, but for us. I won't message you again on WhatsApp unless you reach out first. " 
];

function SorryPage() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < messages.length - 1) {
      setIndex(index + 1);
    }
  };

  return (
    <div className="container">
      <div className="content-box">
        <h2>Message {index + 1}</h2>
        <p>{messages[index]}</p>
        {index < messages.length - 1 ? (
          <button onClick={handleNext}>Next</button>
        ) : (
          <p className="final-message">I am here, waiting  because you're worth waiting for!!🩵💙</p>
        )}
      </div>
    </div>
  );
}

export default SorryPage; 
