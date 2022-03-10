<template>
  <div>
    <v-row>
      <!-- <v-col cols="6" class="overflow-y-auto">
        <v-form style="display: flex">
          <v-col cols="6">
            <h1 style="text-align: end; font-size: 1.19rem">
              E-Mail-Inhalte spezifizieren
            </h1>
            <v-row class="mt-1">
              <div style="display: flex; width: 100%" class="mb-2">
                <v-icon class="countStyle">mdi-numeric-2-circle</v-icon>
                <div style="width: 100%">
                  <template>
                    <span>Absender<strong class="red--text"> *</strong></span>
                  </template>
                  <v-text-field
                    style="font-size: 0.8rem"
                    outlined
                    placeholder="[Benutzername per Default anzeigen]"
                    hint="Diese E-Mailadresse erhält eine Kopie aller verschickter E-Mails aus diesem Auftrag und ist für den Empfänger sichtbar."
                    persistent-hint
                  >
                  </v-text-field>
                </div>
              </div>
              <div style="display: flex; width: 100%" class="mb-3">
                <v-icon class="countStyle">mdi-numeric-3-circle</v-icon>
                <div style="width: 100%">
                  <template>
                    <span
                      >Zahlbar bis<strong class="red--text"> *</strong></span
                    >
                  </template>
                  <v-text-field
                    style="font-size: 0.8rem"
                    outlined
                    placeholder="[Datum aus Eingabemaske Nr. 1]"
                    hide-details
                  >
                  </v-text-field>
                </div>
              </div>
              <div style="display: flex; width: 100%" class="mb-2">
                <v-icon class="countStyle">mdi-numeric-4-circle</v-icon>
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
              <div style="display: flex; width: 100%" class="mb-3">
                <v-icon class="countStyle">mdi-numeric-5-circle</v-icon>
                <div style="width: 100%">
                  <template>
                    <span>Grussformel</span>
                  </template>
                  <v-text-field
                    class="mb-2"
                    style="font-size: 0.8rem"
                    outlined
                    placeholder="[Grussformel Zeile 1]"
                    hide-details
                  >
                  </v-text-field>
                  <v-text-field
                    class="mb-2"
                    style="font-size: 0.8rem"
                    outlined
                    placeholder="[Grussformel Zeile 2 (Name)]"
                    hide-details
                  >
                  </v-text-field>
                  <v-text-field
                    style="font-size: 0.8rem"
                    outlined
                    placeholder="[Grussformel Zeile 3 (Funktion)]"
                    hide-details
                  >
                  </v-text-field>
                </div>
              </div>
            </v-row>
          </v-col>
          <v-col cols="6">
            <div>
              <h1 style="margin-left: 3rem; text-align: left; font-size: 1rem">
                Kontakt für Rückfragen durch den Rechnungsempfänger
              </h1>
              <div style="display: flex; width: 100%" class="mb-3">
                <v-icon class="countStyle">mdi-numeric-6-circle</v-icon>
                <div style="width: 100%">
                  <template>
                    <span>E-Mail<strong class="red--text"> *</strong></span>
                  </template>
                  <v-text-field
                    class="mb-2"
                    style="font-size: 0.8rem"
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
                    outlined
                    placeholder="[Postadresse]"
                    hide-details
                  >
                  </v-text-field>
                </div>
              </div>
            </div>
            <div>
              <h1
                style="text-align: start; font-size: 1.19rem; margin-left: 3rem"
              >
                Versandbeilagen
              </h1>
              <div style="display: flex; width: 100%" class="mb-3">
                <v-icon class="countStyle">mdi-numeric-7-circle</v-icon>
                <div style="width: 100%">
                  <v-checkbox
                    style="margin-top: 0px !important"
                    class="mb-3"
                    v-model="versandbeilage"
                    hide-details
                    label="Versandbeilage mitschicken"
                  ></v-checkbox>
                  <v-select :items="items" dense solo></v-select>
                </div>
              </div>
            </div>
          </v-col>
        </v-form>
      </v-col> -->
      <v-col cols="7">
        <v-container
          id="scroll-target"
          style="max-height: 500px;"
          class="overflow-y-auto"
        >
          <v-row
            v-scroll:#scroll-target="onScroll"
            align="center"
            justify="center"
          >
            <v-form style="display: flex">
              <v-col cols="6">
                <h1 style="text-align: end; font-size: 1.19rem">
                  E-Mail-Inhalte spezifizieren
                </h1>
                <v-row class="mt-1">
                  <div style="display: flex; width: 100%" class="mb-2">
                    <v-icon class="countStyle">mdi-numeric-2-circle</v-icon>
                    <div style="width: 100%">
                      <template>
                        <span
                          >Absender<strong class="red--text"> *</strong></span
                        >
                      </template>
                      <v-text-field
                        style="font-size: 0.8rem"
                        outlined
                        placeholder="[Benutzername per Default anzeigen]"
                        hint="Diese E-Mailadresse erhält eine Kopie aller verschickter E-Mails aus diesem Auftrag und ist für den Empfänger sichtbar."
                        persistent-hint
                      >
                      </v-text-field>
                    </div>
                  </div>
                  <div style="display: flex; width: 100%" class="mb-3">
                    <v-icon class="countStyle">mdi-numeric-3-circle</v-icon>
                    <div style="width: 100%">
                      <template>
                        <span
                          >Zahlbar bis<strong class="red--text">
                            *</strong
                          ></span
                        >
                      </template>
                      <v-text-field
                        style="font-size: 0.8rem"
                        outlined
                        placeholder="[Datum aus Eingabemaske Nr. 1]"
                        hide-details
                      >
                      </v-text-field>
                    </div>
                  </div>
                  <div style="display: flex; width: 100%" class="mb-2">
                    <v-icon class="countStyle">mdi-numeric-4-circle</v-icon>
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
                  <div style="display: flex; width: 100%" class="mb-3">
                    <v-icon class="countStyle">mdi-numeric-5-circle</v-icon>
                    <div style="width: 100%">
                      <template>
                        <span>Grussformel</span>
                      </template>
                      <v-text-field
                        class="mb-2"
                        style="font-size: 0.8rem"
                        outlined
                        placeholder="[Grussformel Zeile 1]"
                        hide-details
                      >
                      </v-text-field>
                      <v-text-field
                        class="mb-2"
                        style="font-size: 0.8rem"
                        outlined
                        placeholder="[Grussformel Zeile 2 (Name)]"
                        hide-details
                      >
                      </v-text-field>
                      <v-text-field
                        style="font-size: 0.8rem"
                        outlined
                        placeholder="[Grussformel Zeile 3 (Funktion)]"
                        hide-details
                      >
                      </v-text-field>
                    </div>
                  </div>
                  <div>
                  <h1
                    style="margin-left: 3rem; text-align: left; font-size: 1rem"
                  >
                    Kontakt für Rückfragen durch den Rechnungsempfänger
                  </h1>
                  <div style="display: flex; width: 100%" class="mb-3">
                    <v-icon class="countStyle">mdi-numeric-6-circle</v-icon>
                    <div style="width: 100%">
                      <template>
                        <span>E-Mail<strong class="red--text"> *</strong></span>
                      </template>
                      <v-text-field
                        class="mb-2"
                        style="font-size: 0.8rem"
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
              <v-col cols="6">
                <div>
                  <h1
                    style="
                      text-align: start;
                      font-size: 1.19rem;
                      margin-left: 3rem;
                    "
                  >
                    Versandbeilagen
                  </h1>
                  <div style="display: flex; width: 100%" class="mb-3">
                    <v-icon class="countStyle">mdi-numeric-7-circle</v-icon>
                    <div style="width: 100%">
                      <v-checkbox
                        style="margin-top: 0px !important"
                        class="mb-3"
                        v-model="versandbeilage"
                        hide-details
                        label="Versandbeilage mitschicken"
                      ></v-checkbox>
                      <v-select hide-details :items="items" dense solo class="mb-3"></v-select>
                      <v-file-input
                        accept="file/pdf"
                        small-chips
                        multiple
                        label="[Unpersönliche Beilage.pdf]"
                      ></v-file-input>
                    </div>
                  </div>
                </div>
              </v-col>
            </v-form>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    offsetTop: 0,
    versandbeilage: false,
    items: ['Unpersönliche Beilage', 'Personalisierte Beilage']
  }),
  methods: {
    onScroll (e) {
      this.offsetTop = e.target.scrollTop
    }
  }
}
</script>

<style>
.countStyle {
  font-size: 3rem !important;
  color: #96c319 !important;
  display: contents !important;
}
</style>
