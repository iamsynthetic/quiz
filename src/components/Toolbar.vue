<!--<template functional>
    <v-app-bar color="#f49881" app>
        <v-toolbar flat color="transparent">
            <v-spacer />
            <v-menu
      v-if="props.loggedIn"
      auto
      offset-y
      bottom
    >
    <v-avatar slot="activator" class="mr-5">
        <img :src="props.profile.picture" />
      </v-avatar>
      <v-list>
        <v-list-tile @click="props.logout">
          <v-list-tile-title>Logout</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
            <v-btn v-else flat @click="props.login">Login</v-btn>
        </v-toolbar>
    </v-app-bar>
</template>-->

<template functional>
    <v-app-bar color="#f49881" app>
        <v-toolbar flat color="transparent">
            <v-toolbar-title class="white--text ml-5">Vue PWA</v-toolbar-title>
            <v-spacer />
            <!-- <v-menu v-if="props.loggedIn" auto offset-y bottom> -->
                <!-- <v-avatar slot="activator" class="mr-5">
                    <img :src="props.profile.picture" />
                </v-avatar> -->
                <!-- <v-list>
                    <v-list-tile @click="props.logout">
                    <v-list-tile-title>Logout</v-list-tile-title>
                    </v-list-tile>
                </v-list> -->
            <!-- <div v-if="props.loggedIn" auto offset-y bottom>
                <v-avatar class="mr-5">
                    <img :src="props.profile.picture" />
                </v-avatar>
                <v-list>
                    <v-list-tile @click="props.logout">
                    <v-list-tile-title>Logout</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </div> -->


            <v-menu v-if="props.loggedIn">
                <!-- <template v-slot:activator="{ on, attrs }"> -->

                <!-- avatar is causing this to not show for some reason -->
                <template v-slot:activator="{ on, attrs }">
                    <!-- <v-btn v-bind="attrs" v-on="on">Click me</v-btn> -->
                    <img :src="props.profile.picture" v-bind="attrs" v-on="on"/>
                </template>
                
                <!-- </template> -->

                <v-list>
                    <v-list-tile @click="props.logout">
                    <v-list-tile-title>Logout</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>


                <v-btn class="mr-5" v-else flat @click="props.login">Login</v-btn>
            
        </v-toolbar>
    </v-app-bar>
</template>




<style>

/* colors
#f49881 - coral
#01bfbf - teal*/

</style>