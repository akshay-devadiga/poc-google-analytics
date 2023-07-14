// here we use custom partial bundle
import plotly from 'plotly.js-dist-min'

export default function (_, inject) {
  inject('plotly', plotly);
}