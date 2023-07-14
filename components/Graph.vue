<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="9" lg="7">
        <div class="text-center">
          <h2 class="ui-title font-weight-bold">Interactive tool</h2>
          <p>
            Whether you're a seasoned investor or just starting your investment
            journey, our interactive tool is designed to empower you with the
            knowledge and resources to make confident investment choices.
          </p>
        </div>
      </v-col>
      <v-col cols="auto">
        <div id="graph"></div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "ComingSoon",
  data() {
    return {};
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      fetch("https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv")
        .then(response => response.text())
        .then(csvData => {
          // Parse CSV to JSON
          const rows = csvData.split('\n');
          const headers = rows[0].split(',');

          const jsonData = rows.slice(1).map(row => {
            const values = row.split(',');
            const obj = {};
            headers.forEach((header, index) => {
              obj[header] = values[index];
            });
            return obj;
          });

          // Create traces using the JSON data
          const trace1 = {
            type: "scatter",
            mode: "lines",
            x: this.unpack(jsonData, "Date"),
            y: this.unpack(jsonData, "AAPL.High"),
            line: { color: "#17BECF" },
          };

          const trace2 = {
            type: "scatter",
            mode: "lines",
            x: this.unpack(jsonData, "Date"),
            y: this.unpack(jsonData, "AAPL.Low"),
            line: { color: "#7F7F7F" },
          };

          const data = [trace1, trace2];

          const layout = {
            xaxis: {
              range: ["2016-07-01", "2016-12-31"],
              type: "date",
            },
            yaxis: {
              autorange: true,
              range: [86.8700008333, 138.870004167],
              type: "linear",
            },
          };

          // Plot the graph using Plotly
          this.$plotly.newPlot("graph", data, layout,{responsive:true,displayModeBar:false});
        });
    },
    unpack(rows, key) {
      return rows.map(row => row[key]);
    }
}
};
</script>
