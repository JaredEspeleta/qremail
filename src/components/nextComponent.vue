<template>
  <v-container grid->
    <v-row>
      <v-col cols="3">
        <h1 style="text-align: end; font-size: 1.19rem">
          E-Mail-Inhalte spezifizieren
        </h1>
        <v-row class="mt-1">
          <div style="display: flex; width: 100%;" class="mb-2">
            <v-icon style="font-size: 3rem; color: #96c319"
              >mdi-numeric-2-circle</v-icon
            >
            <div style="width: 100%">
              <template>
                <span>Absender<strong class="red--text"> *</strong></span>
              </template>
              <v-text-field
                style="font-size: 0.8rem"
                autofocus
                outlined
                placeholder="[Benutzername per Default anzeigen]"
                hint="Diese E-Mailadresse erhält eine Kopie aller verschickter E-Mails aus diesem Auftrag und ist für den Empfänger sichtbar."
                persistent-hint
              >
              </v-text-field>
            </div>
          </div>
          <div style="display: flex; width: 100%;" class="mb-3">
            <v-icon style="font-size: 3rem; color: #96c319"
              >mdi-numeric-3-circle</v-icon
            >
            <div style="width: 100%">
              <template>
                <span>Zahlbar bis<strong class="red--text"> *</strong></span>
              </template>
              <v-text-field
                style="font-size: 0.8rem"
                autofocus
                outlined
                placeholder="[Datum aus Eingabemaske Nr. 1]"
                hide-details
              >
              </v-text-field>
            </div>
          </div>
          <div style="display: flex; width: 100%;" class="mb-2">
            <v-icon style="font-size: 3rem; color: #96c319"
              >mdi-numeric-4-circle</v-icon
            >
            <div style="width: 100%">
              <template>
                <span>Freitext</span>
              </template>
              <v-textarea
                outlined
                hint="Max. 8 Zeilen bzw. 700 Zeichen inkl. Leerzeichen"
                persistent-hint
              ></v-textarea>
            </div>
          </div>
          <div style="display: flex; width: 100%;" class="mb-3">
            <v-icon style="font-size: 3rem; color: #96c319"
              >mdi-numeric-5-circle</v-icon
            >
            <div style="width: 100%">
              <template>
                <span>Grussformel</span>
              </template>
              <v-text-field
                class="mb-2"
                style="font-size: 0.8rem"
                autofocus
                outlined
                placeholder="[Grussformel Zeile 1]"
                hide-details
              >
              </v-text-field>
              <v-text-field
                class="mb-2"
                style="font-size: 0.8rem"
                autofocus
                outlined
                placeholder="[Grussformel Zeile 2 (Name)]"
                hide-details
              >
              </v-text-field>
              <v-text-field
                style="font-size: 0.8rem"
                autofocus
                outlined
                placeholder="[Grussformel Zeile 3 (Funktion)]"
                hide-details
              >
              </v-text-field>
            </div>
          </div>
          <div>
            <h1 style="margin-left: 3rem; text-align: left; font-size: 1rem;">
              Kontakt für Rückfragen durch den Rechnungsempfänger
            </h1>
            <div style="display: flex; width: 100%;" class="mb-3">
              <v-icon style="font-size: 3rem; color: #96c319"
                >mdi-numeric-6-circle</v-icon
              >
              <div style="width: 100%">
                <template>
                  <span>E-Mail<strong class="red--text"> *</strong></span>
                </template>
                <v-text-field
                  class="mb-2"
                  style="font-size: 0.8rem"
                  autofocus
                  outlined
                  placeholder="[Benutzername per Default anzeigen]"
                  hide-details
                >
                </v-text-field>
                <template>
                  <span>Telefon</span>
                </template>
                <v-text-field
                  class="mb-2"
                  style="font-size: 0.8rem"
                  autofocus
                  outlined
                  placeholder="[Telefon]"
                  hide-details
                >
                </v-text-field>
                <template>
                  <span>Postadresse</span>
                </template>
                <v-text-field
                  style="font-size: 0.8rem"
                  autofocus
                  outlined
                  placeholder="[Postadresse]"
                  hide-details
                >
                </v-text-field>
              </div>
            </div>
          </div>
        </v-row>
      </v-col>
      <v-col cols="3">
        <v-text-field name="name" label="label" id="id"></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-card>
          <v-card-title primary-title> title </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {}
</script>

<style>
</style>
