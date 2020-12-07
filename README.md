# video360-player

Due Manifest di attività:
- init.manifest: initial settings
- settins.manifest: contiene tutti i settings di quell'attività (con scope=activitiy). 
    Per ogni settings, ho uno stage tra "before" e "during"

stage sta dentro ogni singolo
tutti quelli che stanno in setting.manifest sono con scope: activity
per ogni setting stabilisci stage come un array di possibili stages. es. ["before","during"]
1 manifest per attivitá
i setting.manifest con scope: "mode" o "all" staranno da un'altra parte