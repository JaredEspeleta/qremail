<template>
  <v-app style="background: #f8f7f2">
    <v-app-bar app style="display: contents;">
        <v-tabs fixed-tabs v-model="tab" align-with-title color="black">
          <v-tabs-slider color="#51690d"></v-tabs-slider>
          <v-tab style="text-transform: capitalize !important;">Angebot & Preise</v-tab>
          <v-tab style="text-transform: capitalize !important;">Informationen zur QR-Rechung</v-tab>
          <v-tab style="text-transform: capitalize !important;">Kontakt & Support</v-tab>
          <v-tab style="text-transform: capitalize !important;">Über uns</v-tab>
        </v-tabs>
    </v-app-bar>
    <div>
      <h3 style="text-transform: capitalize !important; background: #51690d; color: white; padding: 8px;" class="font-weight-bold">
        QR-Serie, E-Mailversand - Korrektur E-Mails mit negativem Validierungs-Ergebnis
      </h3>
    </div>
    <v-main style="padding: 0px 0px 0px !important;">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
  })
}
</script>
