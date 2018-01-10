<?php
$dir = "options/";

if(is_dir($dir)) {
  if($dh = opendir($dir)) {
    $result = "[";
    while(($file = readdir($dh)) !== false) {
      if($file != "." && $file != "..") {
        $result .= '"'.$file.'",';
      }
    }
    $result = chop($result,",");
    $result .= "]";
    echo $result;
    closedir($dh);
  }
}
?>
