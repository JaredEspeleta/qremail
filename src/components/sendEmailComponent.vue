<template>
  <v-container grid-list-xs>
    <div style="padding: 1.3rem;">
      <v-row>
        <v-icon style="font-size: 3rem; color: #96c319;">mdi-numeric-1-circle</v-icon>
        <h3 style="align-self: center;">Fehlende oder fehlerhafte E-Mailadressen korrigieren</h3>
      </v-row>
    </div>
    <v-data-table
      :headers='headers'
      :items='items'
      hide-default-footer
      class='elevation-1'
      pagination.sync='pagination'
      loading-text="Loading... Please wait"
      :items-per-page=5
      >
      <template v-slot:[`item.mail`]="{ item }">
        <div v-if="!item.checkEmail" class="styleEmail">
          <div style="width: 100%; text-align: left; color: red">
            <div>
              {{item.mail}}
            </div>
            <div>
              <h6>Falsches Format</h6>
            </div>
          </div>
          <v-chip
            label
            color="transparent;"
          >
            <v-icon style="color: red;">mdi-alert-outline</v-icon>
          </v-chip>
        </div>
        <div v-else class="styleEmail">
          <div style="width: 100%; text-align: left; color: ">
            {{item.mail}}
          </div>
          <v-chip
              label
              color="transparent;"
            >
            <v-icon style="color: green;">mdi-check</v-icon>
          </v-chip>
        </div>
      </template>
      <template v-slot:[`item.position`]="{ item }">
        <v-chip
          label
          color="transparent;"
          class="hoverChip"
        >
          <v-icon style="color: red;">{{ item.position }}</v-icon>
        </v-chip>
      </template>
    </v-data-table>
    <div class="text-center pt-2 mt-2 mr-2" style="display: inline-grid; float: right;">
      <v-btn
        tile
        elevation="11"
        color="#109fde"
        style="color: white;"
        class="mb-2"
        @click="next"
      >
        Weiter
      </v-btn>
      <v-btn
        tile
        elevation="11"
        color="#995015"
        style="color: white;"
      >
        Abbrechen
      </v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  async beforeMount () {
    await this.checkEmail()
  },
  data () {
    return {
      headers: [
        { text: 'ID', value: 'id', align: 'start', class: 'styleHeader' },
        { text: 'Kundennummer', value: 'kundennummer', align: 'start', class: 'styleHeader' },
        { text: 'Vername / Firma', value: 'firma', align: 'start', class: 'styleHeader' },
        { text: 'Nachname', value: 'nachname', align: 'start', class: 'styleHeader' },
        { text: 'Strasse', value: 'strasse', align: 'start', class: 'styleHeader' },
        { text: 'Hausnr.', value: 'hausnr', align: 'end', class: 'styleHeader' },
        { text: 'PLZ', value: 'plz', align: 'end', class: 'styleHeader' },
        { text: 'Ort', value: 'ort', align: 'end', class: 'styleHeader' },
        { text: 'Land', value: 'land', align: 'end', class: 'styleHeader' },
        { text: 'E-Mail', value: 'mail', align: 'end', class: 'styleHeader' },
        { text: 'Position aus Auftrag entfermen', value: 'position', align: 'center', class: 'styleHeader' }
      ],
      items: [
        {
          id: 1,
          kundennummer: '00.000.01',
          firma: 'Backerei Konrad',
          nachname: '',
          strasse: 'Musttergasse',
          hausnr: 1,
          plz: 1001,
          ort: 'Genf',
          land: 'CH',
          mail: 'test.com',
          checkEmail: false,
          position: 'mdi-close-thick'
        },
        {
          id: 2,
          kundennummer: '00.000.02',
          firma: 'Heidi',
          nachname: '',
          strasse: 'Musttergasse',
          hausnr: 2,
          plz: 1001,
          ort: 'Genf',
          land: 'CH',
          mail: 'h.muller.ch',
          checkEmail: false,
          position: 'mdi-close-thick'
        },
        {
          id: 3,
          kundennummer: '00.000.03',
          firma: 'Hans',
          nachname: 'Muster',
          strasse: 'Mustergasse',
          hausnr: 3,
          plz: 1001,
          ort: 'Genf',
          land: 'CH',
          mail: 'test.com',
          checkEmail: false,
          position: 'mdi-close-thick'
        },
        {
          id: 4,
          kundennummer: '00.000.04',
          firma: 'UBS AG',
          nachname: '',
          strasse: 'Mustergasse',
          hausnr: 4,
          plz: 1001,
          ort: 'Genf',
          land: 'CH',
          mail: 'test@test.com',
          checkEmail: false,
          position: 'mdi-close-thick'
        },
        {
          id: 5,
          kundennummer: '00.000.05',
          firma: 'Alejandro',
          nachname: 'Romero',
          strasse: 'Mustergasse',
          hausnr: 5,
          plz: 1001,
          ort: 'Genf',
          land: 'CH',
          mail: 'aromero@quickapps.com',
          checkEmail: false,
          position: 'mdi-close-thick'
        }
      ]
    }
  },
  methods: {
    async checkEmail () {
      this.items.forEach(element => {
        if (element.mail !== '') {
          var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          var flag = re.test(element.mail)
          if (flag) {
            element.checkEmail = flag
          } else {
            element.checkEmail = flag
          }
        }
      })
    },
    async next () {
      this.$router.push({ name: 'next' })
    }
  }
}
</script>

<style>
.styleHeader{
  background-color: #51690d;
  color: white !important;
  border: white 1px solid !important;
  font-size: 10px !important;
}
.hoverChip:hover{
  cursor: pointer;
}
.styleEmail{
  display: flex !important;
  place-content: space-between !important;
}
</style>
