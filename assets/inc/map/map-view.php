<section>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-3">
        <div class="side-photo">
          <br>
          <img src="assets/img/pic3.jpg" class="img-responsive" width="100%" alt="">
          <br><br>
          <img src="assets/img/pic8.jpg" class="img-responsive" width="100%" alt="">
          <br><br>
          <img src="assets/img/pic2.jpg" class="img-responsive" width="100%" alt="">
          <br><br><br>
        </div>
      </div>
      <div class="col-sm-6">
        <br><br>
        <div id="map"></div>
        <script>
          var map;
          function initMap() {
            var breathIcon = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
            var breathtakingCabin = {lat:35.712435,lng:-83.617700},
                dollyWood = {lat:35.795103,lng:-83.531186},
                lauralGolf = {lat:35.671932,lng:-83.810423},
                bluffMtn = {lat:35.817261,lng:-83.578783},
                patriot = {lat:35.788508,lng:-83.552718};
            map = new google.maps.Map(document.getElementById('map'), {
              center: breathtakingCabin,
              zoom: 10
            });
            var marker = new google.maps.Marker({
              position: breathtakingCabin,
              map: map,
              title: 'Breathtaking Cabin',
              icon: breathIcon
            });
            var marker = new google.maps.Marker({
              position: dollyWood,
              map: map,
              title: 'Dollywood\n2700 Dollywood Parks Blvd, Pigeon Forge, TN 37863\nResort Front Desk: +1-865-365-1900\nDescription: Theme Park'
            });
            var marker = new google.maps.Marker({
              position: lauralGolf,
              map: map,
              title: 'Laural Valley Golf Course\n702 Country Club Dr, Townsend, TN 37882-3620\n+1 865-525-4800\nDescription: Golf Course'
            });
            var marker = new google.maps.Marker({
              position: bluffMtn,
              map: map,
              title: 'Bluff Mountain Adventures\n2186 Parkway Pigeon Forge, TN 37863\n1-866-428-7711\nDescription: ATV Rides'
            });
            var marker = new google.maps.Marker({
              position: patriot,
              map: map,
              title: 'Patriot Park\n186 Old Mill Avenue Pigeon Forge, TN 37863\n186 Old Mill Avenue Pigeon Forge, TN 37863\nDescription: State Park'
            });
          }
        </script>
      </div>
      <div class="col-sm-3">
        <div class="side-photo">
          <br>
          <img src="assets/img/pic39.jpg" class="img-responsive" width="100%" alt="">
          <br><br>
          <img src="assets/img/pic25.jpg" class="img-responsive" width="100%" alt="">
          <br><br>
          <img src="assets/img/pic31.jpg" class="img-responsive" width="100%" alt="">
          <br><br><br>
        </div>
      </div>
    </div>
  </div>
</section>
