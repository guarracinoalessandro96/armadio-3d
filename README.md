# Armadio 3D 👕✨

Il tuo armadio digitale in 3D. Fotografi i tuoi capi, scegli un capo e l'app
crea l'**outfit perfetto** intorno, abbinando i colori in base alla tua
**armocromia** e al **meteo** di oggi.

**App web installabile (PWA)** — si aggiunge alla schermata Home dell'iPhone come una vera app.

## Cosa fa
- **Oggi**: il tuo avatar + data, stagione e meteo (Pomigliano d'Arco). Scegli un capo
  (es. maglione o jeans) e l'app costruisce l'outfit perfetto, spiegando *perché* i colori funzionano.
- **Armocromia**: imposti la tua stagione (Inverno / Estate / Autunno / Primavera) e l'app
  privilegia i colori che ti donano.
- **Regole di abbinamento**: i neutri (beige, bianco, grigio, nero, denim, cammello) vanno
  con tutto; abbinamenti classici promossi (beige + blu ✓); accostamenti che stonano evitati
  (blu acceso + rosso ✗); mai troppi colori accesi insieme.
- **Meteo e stagione**: suggerisce capi adatti alla temperatura e alla pioggia.
- **Rotazione 7 giorni**: non ripropone gli stessi capi per una settimana (così si lavano),
  **tranne le scarpe**.
- **Armadio**: fotografi e gestisci i capi (categorie, colore automatico, preferiti, lavaggio, prezzo/costo-uso).
- **Archivio**: come ti sei vestito nei giorni scorsi + statistiche.

## Privacy
Le tue **foto e i tuoi dati restano solo sul tuo dispositivo** (nel browser, con IndexedDB).
Non vengono caricati da nessuna parte. Il codice è pubblico, i tuoi capi no.

## Tecnico
App a file singolo (`index.html`), nessuna dipendenza da installare. Meteo: Open-Meteo (senza chiave).
Funziona offline dopo la prima apertura (service worker).
