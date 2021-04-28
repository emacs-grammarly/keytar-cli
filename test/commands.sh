#!/bin/sh
# ========================================================================
# $File: commands.sh $
# $Date: 2021-04-28 16:04:12 $
# $Revision: $
# $Creator: Jen-Chieh Shen $
# $Notice: See LICENSE.txt for modification and distribution information
#                   Copyright © 2021 by Shen, Jen-Chieh $
# ========================================================================

echo $PWD

cd ..

echo $PWD

npm install

CMD="node index.js"

echo "[INFO] 'keytar-cli' version: "
$CMD --version
