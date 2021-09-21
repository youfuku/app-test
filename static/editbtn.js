//編集計算ページのデータベースの日付指定削除ボタン

const dbdelete = document.getElementById("db-delete");

dbdelete.addEventListener("click", function(event){
    const month = document.getElementById("edit-select-month").value;
    const day = document.getElementById("edit-select-day").value;
    const name = document.getElementById("edit-select-name").value;

    const comment = document.getElementById("comment-place");

    const outputsend = '<input type="text" name="send-month" value="' + month + '"><input type="text" name="send-day" value="' + day + '"><input type="text" name="send-name" value="' + name + '">'
    const sendplace = document.getElementById("send-place")

    if (month == '未指定') {
        if (day == '未指定'){
            if(name == '未指定'){
                const outputdel = '<p id="del-comment" style="text-align: center; color:red">※削除する場所を指定してください。</p>';
                comment.insertAdjacentHTML('afterend', outputdel);
            }
            else{
                sendplace.insertAdjacentHTML('beforeend', outputsend);
                document.getElementById("send-btn").click();
            }
        }
        else{
            sendplace.insertAdjacentHTML('beforeend', outputsend);
            document.getElementById("send-btn").click();
        }
    }
    else{
        sendplace.insertAdjacentHTML('beforeend', outputsend);
        document.getElementById("send-btn").click();
    }

})

//編集計算ページの表示ボタン

const resbtn = document.getElementById("res-btn");

resbtn.addEventListener("click", function(event){
    const month = document.getElementById("res-select-month").value;
    const name = document.getElementById("res-select-name").value;

    const comment = document.getElementById("comment-place");

    const outputresult = '<input type="text" name="result-month" value="' + month + '"><input type="text" name="result-name" value="' + name + '">'
    const resultplace = document.getElementById("result-place")

    if (month == '未指定') {
        if(name == '未指定'){
            const outputdel = '<p id="del-comment" style="text-align: center; color:red">※表示＆計算する場所を指定してください。</p>';
            comment.insertAdjacentHTML('afterend', outputdel);
        }
        else{
            resultplace.insertAdjacentHTML('beforeend', outputresult);
            document.getElementById("result-btn").click();
        }
    }
    else{
        resultplace.insertAdjacentHTML('beforeend', outputresult);
        document.getElementById("result-btn").click();
    }

})


//編集計算ページの計算ボタン

const calcbtn = document.getElementById("calc-btn");

calcbtn.addEventListener('click',function(event){
    const mon = document.getElementById("mon").value;
    const tue = document.getElementById("tue").value;
    const wed = document.getElementById("wed").value;
    const thu = document.getElementById("thu").value;
    const fri = document.getElementById("fri").value;
    const sat = document.getElementById("sat").value;
    const sun = document.getElementById("sun").value;
    const free = document.getElementById("free").value;
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const num3 = document.getElementById("num3").value;
    const num4 = document.getElementById("num4").value;
    const num5 = document.getElementById("num5").value;
    const accom = document.getElementById("accom").value;

    const mond = document.getElementById("mond").value;
    const tued = document.getElementById("tued").value;
    const wedd = document.getElementById("wedd").value;
    const thud = document.getElementById("thud").value;
    const frid = document.getElementById("frid").value;
    const satd = document.getElementById("satd").value;
    const sund = document.getElementById("sund").value;
    const freed = document.getElementById("freed").value;
    const num1d = document.getElementById("num1d").value;
    const num2d = document.getElementById("num2d").value;
    const num3d = document.getElementById("num3d").value;
    const num4d = document.getElementById("num4d").value;
    const num5d = document.getElementById("num5d").value;
    const accomd = document.getElementById("accomd").value;

    document.getElementById("monr").value = Number(mond) * Number(mon);
    document.getElementById("tuer").value = Number(tued) * Number(tue);
    document.getElementById("wedr").value = Number(wedd) * Number(wed);
    document.getElementById("thur").value = Number(thud) * Number(thu);
    document.getElementById("frir").value = Number(frid) * Number(fri);
    document.getElementById("satr").value = Number(satd) * Number(sat);
    document.getElementById("sunr").value = Number(sund) * Number(sun);
    document.getElementById("freer").value = Number(freed) * Number(free);  
    document.getElementById("num1r").value = Number(num1d) * Number(num1);  
    document.getElementById("num2r").value = Number(num2d) * Number(num2);  
    document.getElementById("num3r").value = Number(num3d) * Number(num3);  
    document.getElementById("num4r").value = Number(num4d) * Number(num4);  
    document.getElementById("num5r").value = Number(num5d) * Number(num5);  
    document.getElementById("accomr").value = Number(accomd) * Number(accom);

    const monr = document.getElementById("monr").value;
    const tuer = document.getElementById("tuer").value;
    const wedr = document.getElementById("wedr").value;
    const thur = document.getElementById("thur").value;
    const frir = document.getElementById("frir").value;
    const satr = document.getElementById("satr").value;
    const sunr = document.getElementById("sunr").value;
    const freer = document.getElementById("freer").value;  
    const num1r = document.getElementById("num1r").value;  
    const num2r = document.getElementById("num2r").value;  
    const num3r = document.getElementById("num3r").value;  
    const num4r = document.getElementById("num4r").value;  
    const num5r = document.getElementById("num5r").value;  
    const botr = document.getElementById("botr").value;
    const accomr = document.getElementById("accomr").value;

    document.getElementById("resr").value = Number(monr) + Number(tuer) + Number(wedr) + Number(thur) + Number(frir) + Number(satr) + Number(sunr) + Number(freer) + Number(num1r) + Number(num2r) + Number(num3r) + Number(num4r) + Number(num5r) + Number(botr) + Number(accomr);

    const resr = document.getElementById("resr").value;

    document.getElementById("resrd").value = Number(resr);
    document.getElementById("ten").value = Number(resr) * 0.1;

    const resrd = document.getElementById("resrd").value;
    const ten = document.getElementById("ten").value;
    const fin = document.getElementById("fin").value;
    const bou = document.getElementById("bou").value;
    const tra = document.getElementById("tra").value;

    document.getElementById("pay").value = Number(resrd) - Number(ten) - Number(fin) - Number(tra) + Number(bou);
    const pay = document.getElementById("pay").value;
    document.getElementById("taxcut").value = Math.trunc(Number(pay)/1.1);
    const taxcut = document.getElementById("taxcut").value;
    document.getElementById("tax").value = pay - taxcut;
    const tax = document.getElementById("tax").value;

})