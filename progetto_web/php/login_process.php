<?php
// Simuliamo un array di utenti con email e password
$fake_users = array(
    "anastasia@laprescelta.com" => "sbasio"
);

// Recuperiamo i dati inviati dal form
// 'isset' controlla se il campo è stato inviato e non è nullo, altrimenti assegna una stringa vuota
$email = isset($_POST['email']) ? $_POST['email'] : '';
$password = isset($_POST['password']) ? $_POST['password'] : '';

// Verifichiamo se l'email esiste nell'array e se la password corrisponde a quella associata
// 'array_key_exists' controlla se la chiave esiste nell'array e confronta la password
if (array_key_exists($email, $fake_users) && $fake_users[$email] === $password) {
    // Login riuscito: se l'email e la password sono corretti, visualizza un messaggio di benvenuto
    echo "<h1>Benvenuto, " . htmlspecialchars($email) . "!</h1>";
} else {
    // Login fallito: se l'email non esiste o la password non è corretta, mostra un messaggio di errore
    echo "<h1>Login fallito. Email o password errati.</h1>";
}
?>
