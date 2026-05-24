<?php
$errors = [];
$success = false;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $prenom  = trim($_POST['prenom']  ?? '');
    $nom     = trim($_POST['nom']     ?? '');
    $email   = trim($_POST['email']   ?? '');
    $sujet   = trim($_POST['sujet']   ?? '');
    $message = trim($_POST['message'] ?? '');

    if ($prenom  === '') $errors['prenom']  = 'Le prénom est requis.';
    if ($nom     === '') $errors['nom']     = 'Le nom est requis.';
    if ($email   === '') $errors['email']   = "L'email est requis.";
    elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors['email'] = 'Email invalide.';
    if ($sujet   === '') $errors['sujet']   = 'Veuillez choisir un sujet.';
    if ($message === '') $errors['message'] = 'Le message est vide.';

    if (empty($errors)) {
        $to      = 'contact@scisearch.com';
        $subject = "[SciSearch] $sujet";
        $body    = "De : $prenom $nom <$email>\n\n$message";
        $headers = "From: $email";
        mail($to, $subject, $body, $headers);
        $success = true;
    }
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Contact – SciSearch</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" href="style.css">
</head>
<body>

<nav class="navbar navbar-expand-lg topnav">
<div class="container">
  <a class="navbar-brand brand" href="index.html">Sci<span>Search</span></a>
  <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="menu">
    <ul class="navbar-nav ms-auto">
      <li class="nav-item"><a class="nav-link" href="index.html">Accueil</a></li>
      <li class="nav-item"><a class="nav-link" href="man.html">Manifestations</a></li>
      <li class="nav-item"><a class="nav-link" href="dom.html">Domaines</a></li>
      <li class="nav-item"><a class="nav-link" href="arch.html">Archives</a></li>
      <li class="nav-item"><a class="nav-link active" href="ct.php">Contact</a></li>
    </ul>
  </div>
</div>
</nav>

<section class="pagebanner">
  <div class="container">
    <span class="sectiontag">Nous écrire</span>
    <h1 class="pagetitle">Contactez-Nous</h1>
    <p class="pagedesc">Une question, une suggestion ou une demande de partenariat ? Nous sommes à votre écoute.</p>
  </div>
</section>

<section class="container py-5">
  <div class="row g-5">

    <div class="col-lg-7">
      <div class="advsearch">
        <h3 class="formtitle">Envoyer un message</h3>

        <?php if ($success): ?>
          <div class="successbanner">
            ✅ Votre message a bien été envoyé. Nous vous répondrons rapidement.
          </div>
        <?php endif; ?>

        <form method="POST" action="ct.php">
          <div class="row g-3">

            <div class="col-md-6">
              <label class="form-label">Prénom <span class="required">*</span></label>
              <input type="text" name="prenom" class="form-control <?= isset($errors['prenom']) ? 'inputerror' : '' ?>"
                     value="<?= htmlspecialchars($prenom ?? '') ?>">
              <?php if (isset($errors['prenom'])): ?>
                <div class="fielderror" style="display:block"><?= $errors['prenom'] ?></div>
              <?php endif; ?>
            </div>

            <div class="col-md-6">
              <label class="form-label">Nom <span class="required">*</span></label>
              <input type="text" name="nom" class="form-control <?= isset($errors['nom']) ? 'inputerror' : '' ?>"
                     value="<?= htmlspecialchars($nom ?? '') ?>">
              <?php if (isset($errors['nom'])): ?>
                <div class="fielderror" style="display:block"><?= $errors['nom'] ?></div>
              <?php endif; ?>
            </div>

            <div class="col-12">
              <label class="form-label">Email <span class="required">*</span></label>
              <input type="email" name="email" class="form-control <?= isset($errors['email']) ? 'inputerror' : '' ?>"
                     value="<?= htmlspecialchars($email ?? '') ?>">
              <?php if (isset($errors['email'])): ?>
                <div class="fielderror" style="display:block"><?= $errors['email'] ?></div>
              <?php endif; ?>
            </div>

            <div class="col-12">
              <label class="form-label">Sujet <span class="required">*</span></label>
              <select name="sujet" class="form-select <?= isset($errors['sujet']) ? 'inputerror' : '' ?>">
                <option value="">Choisir un sujet</option>
                <?php foreach (['Question générale','Soumettre une manifestation','Signaler une erreur','Demande de partenariat','Autre'] as $opt): ?>
                  <option <?= ($sujet ?? '') === $opt ? 'selected' : '' ?>><?= $opt ?></option>
                <?php endforeach; ?>
              </select>
              <?php if (isset($errors['sujet'])): ?>
                <div class="fielderror" style="display:block"><?= $errors['sujet'] ?></div>
              <?php endif; ?>
            </div>

            <div class="col-12">
              <label class="form-label">Message <span class="required">*</span></label>
              <textarea name="message" class="form-control <?= isset($errors['message']) ? 'inputerror' : '' ?>"
                        rows="5"><?= htmlspecialchars($message ?? '') ?></textarea>
              <?php if (isset($errors['message'])): ?>
                <div class="fielderror" style="display:block"><?= $errors['message'] ?></div>
              <?php endif; ?>
            </div>

            <div class="col-12">
              <button type="submit" class="btngold">Envoyer le message</button>
            </div>

          </div>
        </form>
      </div>
    </div>

    <div class="col-lg-5">
      <div class="d-flex flex-column gap-3">

        <div class="contactcard">
          <div class="contacticon">📧</div>
          <div>
            <div class="contactlabel">Email</div>
            <div class="contactvalue">contact@scisearch.com</div>
          </div>
        </div>

        <div class="contactcard">
          <div class="contacticon">📞</div>
          <div>
            <div class="contactlabel">Téléphone</div>
            <div class="contactvalue">+216 00 000 000</div>
          </div>
        </div>

        <div class="contactcard">
          <div class="contacticon">📍</div>
          <div>
            <div class="contactlabel">Adresse</div>
            <div class="contactvalue">Avenue de la République, Tunis, Tunisie</div>
          </div>
        </div>

        <div class="contactcard">
          <div class="contacticon">🕐</div>
          <div>
            <div class="contactlabel">Heures d'ouverture</div>
            <div class="contactvalue">Lun – Ven : 8h00 – 17h00</div>
          </div>
        </div>

      </div>
    </div>

  </div>
</section>

<footer class="footer">
<div class="container">
  <div class="row">
    <div class="col-md-4">
      <div class="footerlogo">Sci<span>Search</span></div>
      <p>Plateforme de recherche des manifestations scientifiques nationales et internationales.</p>
    </div>
    <div class="col-md-4">
      <h5 class="footertitle">Navigation</h5>
      <a href="index.html" class="footerlink">Accueil</a>
      <a href="man.html" class="footerlink">Manifestations</a>
      <a href="arch.html" class="footerlink">Archives</a>
    </div>
    <div class="col-md-4">
      <h5 class="footertitle">Contact</h5>
      <p>Email : contact@scisearch.com</p>
      <p>Téléphone : +216 00 000 000</p>
    </div>
  </div>
  <hr>
  <p class="text-center">© 2026 SciSearch - Tous les droits réservés</p>
</div>
</footer>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>