
//リストの登録ボタン

const addbtn = document.getElementById("list-add-btn");
const listtext = document.getElementById("list-text");
const listplace = document.getElementById("list-place");


addbtn.addEventListener("click", function(event){
    const Value = listtext.value;
    const output = '<input type="checkbox" name="check"><label name="name">' + Value + '</label>';
    listplace.insertAdjacentHTML("beforeend", output);

    const dataselectname = document.getElementById("data-name"); 
    const output1 = '<option value="' + Value + '" name="data-select-content">' + Value + '</option>';
    dataselectname.insertAdjacentHTML('beforeend', output1);

    listtext.value = "";
});

//リストの削除ボタン

const delbtn = document.getElementById("list-delete-btn");


delbtn.addEventListener("click", function(event){
    const check = document.getElementsByName("check");
    const name = document.getElementsByName("name");

    for (let i = check.length-1; 0 <= i; i--){
        if (check[i].checked == true) {
            const nameselectcontent = document.getElementsByName("data-select-content")
            nameselectcontent[i].remove();

            check[i].nextElementSibling.remove();
            check[i].remove();
        }
    }
})

//リストの送信ボタン（上）と追加の増減ボタン（下）

const transbtn = document.getElementById("trans-btn");

transbtn.addEventListener("click", function(event){
    const check = document.getElementsByName("check");
    const name = document.getElementsByName("name");
     
    for (let i = 0; i < check.length; i++){
        if (check[i].checked == true) {
            const innername = name[i].innerText;

            const recordout = '<tr name="del"><td><span name="top-name">'+ innername +'</span></td><td><button class="button" name="down">－</button><input type="text" value="0" class="inputtext" name="textbox"><button class="button" name="up">＋</button></td><td><button class="button"  name="down">－</button ><input type="text" value="0" class="inputtext" name="textbox" ><button class="button" name="up">＋</button> </td><td><button class="button"  name="down">－</button><input type="text" value="0" class="inputtext" name="textbox"><button class="button" name="up">＋</button></td><td><button class="button" name="down">－</button><input type="text" value="0" class="inputtext" name="textbox"><button class="button" name="up">＋</button></td><td><button class="button" name="down">－</button><input type="text" value="0" class="inputtext" name="textbox"><button class="button" name="up">＋</button></td><td><select name="bottle" ><option value="0">0円</option><option value="1000">1000円</option><option value="1100">1100円</option><option value="1200">1200円</option><option value="1300">1300円</option><option value="1400">1400円</option><option value="1500">1500円</option><option value="1600">1600円</option><option value="1700">1700円</option><option value="1800">1800円</option><option value="1900">1900円</option><option value="2000">2000円</option><option value="2100">2100円</option><option value="2200">2200円</option><option value="2300">2300円</option><option value="2400">2400円</option><option value="2500">2500円</option><option value="2600">2600円</option><option value="2700">2700円</option><option value="2800">2800円</option><option value="2900">2900円</option><option value="3000">3000円</option><option value="3100">3100円</option><option value="3200">3200円</option><option value="3300">3300円</option><option value="3400">3400円</option><option value="3500">3500円</option><option value="3600">3600円</option><option value="3700">3700円</option><option value="3800">3800円</option><option value="3900">3900円</option><option value="4000">4000円</option><option value="4100">4100円</option><option value="4200">4200円</option><option value="4300">4300円</option><option value="4400">4400円</option><option value="4500">4500円</option><option value="4600">4600円</option><option value="4700">4700円</option><option value="4800">4800円</option><option value="4900">4900円</option><option value="5000">5000円</option><option value="5100">5100円</option><option value="5200">5200円</option><option value="5300">5300円</option><option value="5400">5400円</option><option value="5500">5500円</option><option value="5600">5600円</option><option value="5700">5700円</option><option value="5800">5800円</option><option value="5900">5900円</option><option value="6000">6000円</option><option value="6100">6100円</option><option value="6200">6200円</option><option value="6300">6300円</option><option value="6400">6400円</option><option value="6500">6500円</option><option value="6600">6600円</option><option value="6700">6700円</option><option value="6800">6800円</option><option value="6900">6900円</option><option value="7000">7000円</option><option value="7100">7100円</option><option value="7200">7200円</option><option value="7300">7300円</option><option value="7400">7400円</option><option value="7500">7500円</option><option value="7600">7600円</option><option value="7700">7700円</option><option value="7800">7800円</option><option value="7900">7900円</option><option value="8000">8000円</option><option value="8100">8100円</option><option value="8200">8200円</option><option value="8300">8300円</option><option value="8400">8400円</option><option value="8500">8500円</option><option value="8600">8600円</option><option value="8700">8700円</option><option value="8800">8800円</option><option value="8900">8900円</option><option value="9000">9000円</option><option value="9100">9100円</option><option value="9200">9200円</option><option value="9300">9300円</option><option value="9400">9400円</option><option value="9500">9500円</option><option value="9600">9600円</option><option value="9700">9700円</option><option value="9800">9800円</option><option value="9900">9900円</option><option value="10000">10000円</option><option value="10100">10100円</option><option value="10200">10200円</option><option value="10300">10300円</option><option value="10400">10400円</option><option value="10500">10500円</option><option value="10600">10600円</option><option value="10700">10700円</option><option value="10800">10800円</option><option value="10900">10900円</option><option value="11000">11000円</option><option value="11100">11100円</option><option value="11200">11200円</option><option value="11300">11300円</option><option value="11400">11400円</option><option value="11500">11500円</option><option value="11600">11600円</option><option value="11700">11700円</option><option value="11800">11800円</option><option value="11900">11900円</option><option value="12000">12000円</option><option value="12100">12100円</option><option value="12200">12200円</option><option value="12300">12300円</option><option value="12400">12400円</option><option value="12500">12500円</option><option value="12600">12600円</option><option value="12700">12700円</option><option value="12800">12800円</option><option value="12900">12900円</option><option value="13000">13000円</option><option value="13100">13100円</option><option value="13200">13200円</option><option value="13300">13300円</option><option value="13400">13400円</option><option value="13500">13500円</option><option value="13600">13600円</option><option value="13700">13700円</option><option value="13800">13800円</option><option value="13900">13900円</option><option value="14000">14000円</option><option value="14100">14100円</option><option value="14200">14200円</option><option value="14300">14300円</option><option value="14400">14400円</option><option value="14500">14500円</option><option value="14600">14600円</option><option value="14700">14700円</option><option value="14800">14800円</option><option value="14900">14900円</option><option value="15000">15000円</option><option value="15100">15100円</option><option value="15200">15200円</option><option value="15300">15300円</option><option value="15400">15400円</option><option value="15500">15500円</option><option value="15600">15600円</option><option value="15700">15700円</option><option value="15800">15800円</option><option value="15900">15900円</option><option value="16000">16000円</option><option value="16100">16100円</option><option value="16200">16200円</option><option value="16300">16300円</option><option value="16400">16400円</option><option value="16500">16500円</option><option value="16600">16600円</option><option value="16700">16700円</option><option value="16800">16800円</option><option value="16900">16900円</option><option value="17000">17000円</option><option value="17100">17100円</option><option value="17200">17200円</option><option value="17300">17300円</option><option value="17400">17400円</option><option value="17500">17500円</option><option value="17600">17600円</option><option value="17700">17700円</option><option value="17800">17800円</option><option value="17900">17900円</option><option value="18000">18000円</option><option value="18100">18100円</option><option value="18200">18200円</option><option value="18300">18300円</option><option value="18400">18400円</option><option value="18500">18500円</option><option value="18600">18600円</option><option value="18700">18700円</option><option value="18800">18800円</option><option value="18900">18900円</option><option value="19000">19000円</option><option value="19100">19100円</option><option value="19200">19200円</option><option value="19300">19300円</option><option value="19400">19400円</option><option value="19500">19500円</option><option value="19600">19600円</option><option value="19700">19700円</option><option value="19800">19800円</option><option value="19900">19900円</option><option value="20000">20000円</option><option value="20100">20100円</option><option value="20200">20200円</option><option value="20300">20300円</option><option value="20400">20400円</option><option value="20500">20500円</option><option value="20600">20600円</option><option value="20700">20700円</option><option value="20800">20800円</option><option value="20900">20900円</option><option value="21000">21000円</option><option value="21100">21100円</option><option value="21200">21200円</option><option value="21300">21300円</option><option value="21400">21400円</option><option value="21500">21500円</option><option value="21600">21600円</option><option value="21700">21700円</option><option value="21800">21800円</option><option value="21900">21900円</option><option value="22000">22000円</option><option value="22100">22100円</option><option value="22200">22200円</option><option value="22300">22300円</option><option value="22400">22400円</option><option value="22500">22500円</option><option value="22600">22600円</option><option value="22700">22700円</option><option value="22800">22800円</option><option value="22900">22900円</option><option value="23000">23000円</option><option value="23100">23100円</option><option value="23200">23200円</option><option value="23300">23300円</option><option value="23400">23400円</option><option value="23500">23500円</option><option value="23600">23600円</option><option value="23700">23700円</option><option value="23800">23800円</option><option value="23900">23900円</option><option value="24000">24000円</option><option value="24100">24100円</option><option value="24200">24200円</option><option value="24300">24300円</option><option value="24400">24400円</option><option value="24500">24500円</option><option value="24600">24600円</option><option value="24700">24700円</option><option value="24800">24800円</option><option value="24900">24900円</option><option value="25000">25000円</option><option value="25100">25100円</option><option value="25200">25200円</option><option value="25300">25300円</option><option value="25400">25400円</option><option value="25500">25500円</option><option value="25600">25600円</option><option value="25700">25700円</option><option value="25800">25800円</option><option value="25900">25900円</option><option value="26000">26000円</option><option value="26100">26100円</option><option value="26200">26200円</option><option value="26300">26300円</option><option value="26400">26400円</option><option value="26500">26500円</option><option value="26600">26600円</option><option value="26700">26700円</option><option value="26800">26800円</option><option value="26900">26900円</option><option value="27000">27000円</option><option value="27100">27100円</option><option value="27200">27200円</option><option value="27300">27300円</option><option value="27400">27400円</option><option value="27500">27500円</option><option value="27600">27600円</option><option value="27700">27700円</option><option value="27800">27800円</option><option value="27900">27900円</option><option value="28000">28000円</option><option value="28100">28100円</option><option value="28200">28200円</option><option value="28300">28300円</option><option value="28400">28400円</option><option value="28500">28500円</option><option value="28600">28600円</option><option value="28700">28700円</option><option value="28800">28800円</option><option value="28900">28900円</option><option value="29000">29000円</option><option value="29100">29100円</option><option value="29200">29200円</option><option value="29300">29300円</option><option value="29400">29400円</option><option value="29500">29500円</option><option value="29600">29600円</option><option value="29700">29700円</option><option value="29800">29800円</option><option value="29900">29900円</option><option value="30000">30000円</option><option value="30100">30100円</option><option value="30200">30200円</option><option value="30300">30300円</option><option value="30400">30400円</option><option value="30500">30500円</option><option value="30600">30600円</option><option value="30700">30700円</option><option value="30800">30800円</option><option value="30900">30900円</option><option value="31000">31000円</option><option value="31100">31100円</option><option value="31200">31200円</option><option value="31300">31300円</option><option value="31400">31400円</option><option value="31500">31500円</option><option value="31600">31600円</option><option value="31700">31700円</option><option value="31800">31800円</option><option value="31900">31900円</option><option value="32000">32000円</option><option value="32100">32100円</option><option value="32200">32200円</option><option value="32300">32300円</option><option value="32400">32400円</option><option value="32500">32500円</option><option value="32600">32600円</option><option value="32700">32700円</option><option value="32800">32800円</option><option value="32900">32900円</option><option value="33000">33000円</option><option value="33100">33100円</option><option value="33200">33200円</option><option value="33300">33300円</option><option value="33400">33400円</option><option value="33500">33500円</option><option value="33600">33600円</option><option value="33700">33700円</option><option value="33800">33800円</option><option value="33900">33900円</option><option value="34000">34000円</option><option value="34100">34100円</option><option value="34200">34200円</option><option value="34300">34300円</option><option value="34400">34400円</option><option value="34500">34500円</option><option value="34600">34600円</option><option value="34700">34700円</option><option value="34800">34800円</option><option value="34900">34900円</option><option value="35000">35000円</option><option value="35100">35100円</option><option value="35200">35200円</option><option value="35300">35300円</option><option value="35400">35400円</option><option value="35500">35500円</option><option value="35600">35600円</option><option value="35700">35700円</option><option value="35800">35800円</option><option value="35900">35900円</option><option value="36000">36000円</option><option value="36100">36100円</option><option value="36200">36200円</option><option value="36300">36300円</option><option value="36400">36400円</option><option value="36500">36500円</option><option value="36600">36600円</option><option value="36700">36700円</option><option value="36800">36800円</option><option value="36900">36900円</option><option value="37000">37000円</option><option value="37100">37100円</option><option value="37200">37200円</option><option value="37300">37300円</option><option value="37400">37400円</option><option value="37500">37500円</option><option value="37600">37600円</option><option value="37700">37700円</option><option value="37800">37800円</option><option value="37900">37900円</option><option value="38000">38000円</option><option value="38100">38100円</option><option value="38200">38200円</option><option value="38300">38300円</option><option value="38400">38400円</option><option value="38500">38500円</option><option value="38600">38600円</option><option value="38700">38700円</option><option value="38800">38800円</option><option value="38900">38900円</option><option value="39000">39000円</option><option value="39100">39100円</option><option value="39200">39200円</option><option value="39300">39300円</option><option value="39400">39400円</option><option value="39500">39500円</option><option value="39600">39600円</option><option value="39700">39700円</option><option value="39800">39800円</option><option value="39900">39900円</option><option value="40000">40000円</option><option value="40100">40100円</option><option value="40200">40200円</option><option value="40300">40300円</option><option value="40400">40400円</option><option value="40500">40500円</option><option value="40600">40600円</option><option value="40700">40700円</option><option value="40800">40800円</option><option value="40900">40900円</option><option value="41000">41000円</option><option value="41100">41100円</option><option value="41200">41200円</option><option value="41300">41300円</option><option value="41400">41400円</option><option value="41500">41500円</option><option value="41600">41600円</option><option value="41700">41700円</option><option value="41800">41800円</option><option value="41900">41900円</option><option value="42000">42000円</option><option value="42100">42100円</option><option value="42200">42200円</option><option value="42300">42300円</option><option value="42400">42400円</option><option value="42500">42500円</option><option value="42600">42600円</option><option value="42700">42700円</option><option value="42800">42800円</option><option value="42900">42900円</option><option value="43000">43000円</option><option value="43100">43100円</option><option value="43200">43200円</option><option value="43300">43300円</option><option value="43400">43400円</option><option value="43500">43500円</option><option value="43600">43600円</option><option value="43700">43700円</option><option value="43800">43800円</option><option value="43900">43900円</option><option value="44000">44000円</option><option value="44100">44100円</option><option value="44200">44200円</option><option value="44300">44300円</option><option value="44400">44400円</option><option value="44500">44500円</option><option value="44600">44600円</option><option value="44700">44700円</option><option value="44800">44800円</option><option value="44900">44900円</option><option value="45000">45000円</option><option value="45100">45100円</option><option value="45200">45200円</option><option value="45300">45300円</option><option value="45400">45400円</option><option value="45500">45500円</option><option value="45600">45600円</option><option value="45700">45700円</option><option value="45800">45800円</option><option value="45900">45900円</option><option value="46000">46000円</option><option value="46100">46100円</option><option value="46200">46200円</option><option value="46300">46300円</option><option value="46400">46400円</option><option value="46500">46500円</option><option value="46600">46600円</option><option value="46700">46700円</option><option value="46800">46800円</option><option value="46900">46900円</option><option value="47000">47000円</option><option value="47100">47100円</option><option value="47200">47200円</option><option value="47300">47300円</option><option value="47400">47400円</option><option value="47500">47500円</option><option value="47600">47600円</option><option value="47700">47700円</option><option value="47800">47800円</option><option value="47900">47900円</option><option value="48000">48000円</option><option value="48100">48100円</option><option value="48200">48200円</option><option value="48300">48300円</option><option value="48400">48400円</option><option value="48500">48500円</option><option value="48600">48600円</option><option value="48700">48700円</option><option value="48800">48800円</option><option value="48900">48900円</option><option value="49000">49000円</option><option value="49100">49100円</option><option value="49200">49200円</option><option value="49300">49300円</option><option value="49400">49400円</option><option value="49500">49500円</option><option value="49600">49600円</option><option value="49700">49700円</option><option value="49800">49800円</option><option value="49900">49900円</option><option value="50000">50000円</option></select></td><td><select name="accompanied"><option value="0">0</option><option value="1">1</option></select></td></tr>'
            const recordplace = document.getElementById("record-place");
            recordplace.insertAdjacentHTML("beforebegin", recordout);
            
            const recordout1 = '<tr name="del"><td><span>'+ innername +'</span></td><td><select name="ct"><option value="1">01</option><option value="2">02</option><option value="3">03</option><option value="4">04</option><option value="5">05</option><option value="6">06</option><option value="7">07</option><option value="8">08</option><option value="9">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select><span>:</span><select name="ct"><option value="0">00</option><option value="15">15</option><option value="30">30</option><option value="45">45</option></select></td><td><select name="lt"><option value="1">01</option><option value="2">02</option><option value="3">03</option><option value="4">04</option><option value="5">05</option><option value="6">06</option><option value="7">07</option><option value="8">08</option><option value="9">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select><span>:</span><select name="lt"><option value="0">00</option><option value="15">15</option><option value="30">30</option><option value="45">45</option></select></td><td><select name="transfer"><option value=""></option><option value="〇">〇</option><option value="×">×</option></select></td><td><select name="fine" ><option value="0">0円</option><option value="1000">1000円</option><option value="2000">2000円</option><option value="3000">3000円</option><option value="3500">3500円</option><option value="4000">4000円</option><option value="4500">4500円</option><option value="5000">5000円</option><option value="5500">5500円</option><option value="6000">6000円</option><option value="6500">6500円</option><option value="7000">7000円</option><option value="7500">7500円</option><option value="8000">8000円</option><option value="8500">8500円</option><option value="9000">9000円</option><option value="9500">9500円</option><option value="10000">10000円</option><option value="20000">20000円</option><option value="30000">30000円</option><option value="40000">40000円</option></td><td><select name="daypay"><option value="0">0円</option><option value="5000">5000円</option><option value="10000">10000円</option><option value="15000">15000円</option><option value="20000">20000円</option></select></t</tr>'
            const recordplace1 = document.getElementById("record-place1");

            recordplace1.insertAdjacentHTML("beforebegin", recordout1);
        }
    }

    
    const downbtn = document.getElementsByName("down")
    const textbox = document.getElementsByName("textbox")
    const upbtn = document.getElementsByName("up")

    for (let b = 0; b < textbox.length; b++){
        downbtn[b].onclick = function(event){
           if (textbox[b].value >= 1) {
               textbox[b].value--;
           }    
        }
        upbtn[b].onclick = function(event){
            textbox[b].value++;
        }
    }


    for (let i = check.length-1; 0 <= i; i--){
        if (check[i].checked == true) {
            check[i].checked = false;
        }
    }

});

//メインのリセットボタン

const resetbtn = document.getElementById("reset-btn");

resetbtn.addEventListener("click", function(event){
    const del = document.getElementsByName("del");
    
    for (let i = del.length - 1; 0 <= i; i--){
        del[i].remove();
    }
})

//メインのデータに追加ボタン

const keepbtn = document.getElementById("keep-btn");

keepbtn.addEventListener("click",function(event){
    const datemonth = document.getElementById("date-month");
    const monthvalue = datemonth.value;
    const dateday = document.getElementById("date-day");
    const dayvalue = dateday.value;

    const datedow = document.getElementById("date-dow");
    const dowvalue = datedow.value;

    const del = document.getElementsByName("del");

    for(let i = 0; i < del.length / 2; i++){
        const topname = document.getElementsByName("top-name");
        const keepname = topname[i].textContent;

        const keeptextbox = document.getElementsByName("textbox");
        const keepbtn1 = keeptextbox[i * 5].value;
        const keepbtn2 = keeptextbox[i * 5 + 1].value;
        const keepbtn3 = keeptextbox[i * 5 + 2].value;
        const keepbtn4 = keeptextbox[i * 5 + 3].value;
        const keepbtn5 = keeptextbox[i * 5 + 4].value;

        const bottle = document.getElementsByName("bottle");
        const keepbottle = bottle[i].value;
        const accompanied = document.getElementsByName("accompanied");
        const keepaccompanied = accompanied[i].value;

        const ct = document.getElementsByName("ct");
        const keepct1 = ct[i * 2].value;
        const keepct2 = ct[i * 2 + 1].value;
        const keepct = keepct1 + ":" + keepct2;
        const numkeepct2 = Number(keepct2)
        
        const lt = document.getElementsByName("lt");
        const keeplt1 = lt[i * 2].value;
        const keeplt2 = lt[i * 2 + 1].value;
        const keeplt = keeplt1 + ":" + keeplt2;
        const numkeeplt2 = Number(keeplt2)
        
        const ctunder = numkeepct2 / 60;
        const ctwh = Number(keepct1) + ctunder;
        const ltunder = numkeeplt2 / 60;
        const ltwh = Number(keeplt1) + ltunder;
        
        let keepwh = 12;
        if (ctwh < ltwh){
            keepwh = ltwh - ctwh;
        }
        else{
            keepwh = 12 - ctwh + ltwh;
        };


        const transfer = document.getElementsByName("transfer");
        const keeptransfer = transfer[i].value;
        const fine = document.getElementsByName("fine");
        const keepfine = fine[i].value;
        const daypay = document.getElementsByName("daypay");
        const keepdaypay = daypay[i].value;

        const pswd = document.getElementById("pswd").value;

        const formkeepout = '<input type="text" value="' + pswd + '"  name="ps"><input type="text" value="' + monthvalue + '" name="month"><input type="text" value="' + dayvalue + '" name="day"><input type="text" value="' + dowvalue + '" name="dow"><input type="text" value="' + keepname + '" name="name"><input type="text" value="' + keepbtn1 + '" name="number1"><input type="text" value="' + keepbtn2 + '" name="number2"><input type="text" value="' + keepbtn3 + '" name="number3"><input type="text" value="' + keepbtn4 + '" name="number4"><input type="text" value="' + keepbtn5 + '" name="number5"><input type="text" value="' + keepbottle + '" name="bottle"><input type="text" value="' + keepaccompanied + '" name="accompanied"><input type="text" value="' + keepct + '" name="ct"><input type="text" value="' + keeplt + '" name="lt"><input type="text" value="' +  keepwh.toPrecision(3) + '" name="wh"><input type="text" value="' + keeptransfer + '" name="transfer"><input type="text" value="' + keepfine + '" name="fine"><input type="text" value="' + keepdaypay + '" name="daypay">'
        const formplace = document.getElementById("form-place")
        formplace.insertAdjacentHTML("beforeend", formkeepout);
    }

    document.getElementById("submit-db").click();
    
})

