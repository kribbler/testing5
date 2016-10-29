<?php 

//header("Content-type:application/pdf");

$url = "https://op-webtools.web.cern.ch/op-webtools/Vistar/";
$ch = curl_init($url);
	curl_setopt($ch,CURLOPT_FRESH_CONNECT,true);
	curl_setopt($ch,CURLOPT_CONNECTTIMEOUT, 30);
	curl_setopt($ch,CURLOPT_USERAGENT, "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)");
	curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
	curl_setopt($ch,CURLOPT_REFERER,$url);
	curl_setopt($ch,CURLOPT_TIMEOUT,30);	
	curl_setopt($ch, CURLOPT_HEADER, true);	
	#curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
$output = curl_exec($ch);

echo $output;