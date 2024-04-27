const firebaseConfig = {
      apiKey: "AIzaSyAS7zddejHlJsp2TiqWP15gDofs-BlgEmo",
      authDomain: "seu-carrinho-e8a7a.firebaseapp.com",
      databaseURL: "https://seu-carrinho-e8a7a-default-rtdb.firebaseio.com",
      projectId: "seu-carrinho-e8a7a",
      storageBucket: "seu-carrinho-e8a7a.appspot.com",
      messagingSenderId: "921568834449",
      appId: "1:921568834449:web:7c151fcbd3df00f8c72030"
};


firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/" + roomName).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebaseMessageId = childKey;
                        messageData = childData;
                        //Início do código
                        name = messageData['name'];
                        message = messageData['message'];
                        like = messageData['like'];
                        nameWithTag = "<h4>" + name + "<img class ='user_tick' src='assinatura.png'></h4>";
                        messageWithTag = "<h4 class='message_h4'>" + message + "</h4>";
                        likeButton = "<button class='btn btn-warning' id=" + firebaseMessageId + " value=" + like + " onclick='updateLike(this.id)'> ";
                        spanWithTag = "<span class='glyphicon glyphicon-thumbs-up'> Like:" + like + "</span></button><hr>";
                        row = nameWithTag + messageWithTag + likeButton + spanWithTag
                        document.getElementById("output").innerHTML += row
                        
                        //Fim do código
                  }
            });
      });
}
getData();

function updateLike(){
button_id = messageId;
likes = document.getElementById(button_id).value;
updateLikes = Number(likes) + 1;
firebase.database().ref(roomName).child(messageId).update({
like : updateLikes
});
}


function logout(){
      localStorage.removeItem("userName");
      localStorage.removeItem("roomName");
      window.location.replace("index.html");
}

