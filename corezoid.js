
const ref = Math.floor(Math.random() * 100000000000000)

// You can set {n} variable for required shop-count in registration diagram (now n = 2), also now the waiting request for updating data (shopping) is 30 sec
// There are two main processes  receiver(for user flow) -> send_mail (sending sleep/reactivation emails)
// The registration_start_diagram state diagram for setting {n} variable
// The client diagram for setting lead`s state
// The clients_dashboard for statistics 


// pre-request script 
// var time = Math.floor(Date.now() / 1000);
// var secret = pm.environment.get("SECRET");
// var content = request.data;
// var signature = CryptoJS.enc.Hex.stringify(CryptoJS.SHA1(time + secret + content + secret));
// pm.environment.set("TIMESTAMP", time);
// pm.environment.set("SIGNATURE", signature); 


//https://www.corezoid.com/api/2/json/129983/{{TIMESTAMP}}/{{SIGNATURE}}

// my API-Login 129983


//REGISTRATION

//request body 
// {
//     "ops": [
//         {
//             "conv_id": 1393946, //registration  process-id
//             "type": "create",
//             "obj": "task",
//             "ref": "47565278920056", //generated ref by Math.floor(Math.random() * 100000000000000)
//             "data": { // request data
//                 "emails": "lizaberest97@gmail.com"
//             }
//         }
//     ]
// }



//UPDATE TASK

//https://www.corezoid.com/api/2/json/129983/{{TIMESTAMP}}/{{SIGNATURE}}

// {
//     "ops": [
//         {
//             "conv_id": 1392672, // receiver process id
//             "type": "modify", // update
//             "obj": "task",
//             "ref": "47565278920078", // ref of task to modify
//             "data": { // task data for update
//                 "shop-count": "0"
//             }
//         }
//     ]
// }





