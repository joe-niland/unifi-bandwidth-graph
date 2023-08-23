# Unifi Bandwidth Graph

A rough web app to display max bandwidth usage from a Unifi WAN connection.

The data was sourced from the Unifi Controller's API, via [this project](https://github.com/Art-of-WiFi/UniFi-API-browser).

This was created to look at general WAN link usage over time, particularly with comparing the max usage vs the ISP's max data rate.

## Usage

```
npm i
npm run dev
```

Access graph at http://localhost:1234

<img src="https://raw.githubusercontent.com/joe-niland/unifi-bandwidth-graph/master/images/graph.png" alt="Screenshot">