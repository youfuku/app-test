# coding=utf-8

from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

import requests
from bs4 import BeautifulSoup

from sqlalchemy.orm import session 

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class Data(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    ps = db.Column(db.String(100))
    month = db.Column(db.String(10))
    day = db.Column(db.String(10))
    dow = db.Column(db.String(10))
    name = db.Column(db.String(10))
    number1 = db.Column(db.String(10))
    number2 = db.Column(db.String(10))
    number3 = db.Column(db.String(10))
    number4 = db.Column(db.String(10))
    number5 = db.Column(db.String(10))
    bottle = db.Column(db.String(10))
    accompanied = db.Column(db.String(10))
    ct = db.Column(db.String(10))
    lt = db.Column(db.String(10))
    wh = db.Column(db.String(10))
    transfer = db.Column(db.String(10))
    fine = db.Column(db.String(10))
    daypay = db.Column(db.String(10))




@app.route('/')
def index():
    alldatas = Data.query.all()
    return render_template('index.html', alldatas=alldatas)

@app.route('/add', methods=['POST'])
def add():
    alldatas = Data.query.all()
    ps = request.form['pswd']
    
    if ps == '':
        errortext = '文字が入力されていません。'
        return render_template('index.html', errortext=errortext)
    else:
        for alldata in alldatas:
            if ps == alldata.ps:
                errortext1 = 'そのパスワードは使えません。'
                return render_template('index.html', errortext1=errortext1)
                break
        else:
            pswd = Data(ps=ps)
            db.session.add(pswd)
            db.session.commit()

            successtext = '作成しました'
            return render_template('index.html', successtext=successtext)

@app.route('/record', methods=['POST'])
def login():
    alldatas = Data.query.all()
    ps = request.form['login']

    if ps == '':
        errortext2 = '文字が入力されていません。'
        return render_template('index.html', errortext2=errortext2)
    else:
        for alldata in alldatas:
            if ps == alldata.ps:
                userps = ps
                namer = []
                for alldata in alldatas:
                    if alldata.ps == userps and alldata.name != None:
                        namer.append(alldata.name)  
                namers = list(dict.fromkeys(namer))
                return render_template('record.html', userps=userps, alldatas=alldatas,namers=namers)
                break
        else:
            errortext3 = 'そのパスワードは存在しません。'
            return render_template('index.html', errortext3=errortext3)

@app.route('/keep', methods=['POST'])
def keep():
    alldatas = Data.query.all()

    keepps = request.form.getlist('ps')
    keepmonth =request.form.getlist('month')
    keepday = request.form.getlist('day')
    keepdow = request.form.getlist('dow')
    keepname = request.form.getlist('name')
    keepnumber1 = request.form.getlist('number1')
    keepnumber2 = request.form.getlist('number2')
    keepnumber3 = request.form.getlist('number3')
    keepnumber4 = request.form.getlist('number4')
    keepnumber5 = request.form.getlist('number5')
    keepbottle = request.form.getlist('bottle')
    keepaccompanied = request.form.getlist('accompanied')
    keepct = request.form.getlist('ct')
    keeplt = request.form.getlist('lt')
    keepwh = request.form.getlist('wh')
    keeptransfer = request.form.getlist('transfer')
    keepfine = request.form.getlist('fine')
    keepdaypay = request.form.getlist('daypay')

    for i in range(len(keepmonth)):
        ps = keepps[i]
        month = keepmonth[i]
        day = keepday[i]
        dow = keepdow[i]
        name = keepname[i]
        number1 = keepnumber1[i]
        number2 = keepnumber2[i]
        number3 = keepnumber3[i]
        number4 = keepnumber4[i]
        number5 = keepnumber5[i]
        bottle = keepbottle[i]
        accompanied = keepaccompanied[i]
        ct = keepct[i]
        lt = keeplt[i]
        wh = keepwh[i]
        transfer = keeptransfer[i]
        fine = keepfine[i]
        daypay = keepdaypay[i]

        for alldata in alldatas:
            if alldata.ps == ps and alldata.month == month and alldata.day == day and alldata.dow == dow and alldata.name == name and alldata.number1 == number1 and alldata.number2 == number2 and alldata.number3 == number3 and alldata.number4 == number4 and alldata.number5 == number5 and alldata.bottle == bottle and alldata.accompanied == accompanied and alldata.ct == ct and alldata.lt == lt and alldata.wh == wh and alldata.transfer == transfer and alldata.fine == fine and alldata.daypay == daypay:
                db.session.delete(alldata)
                db.session.commit()
        
        keeping = Data(ps=ps,month=month,day=day,dow=dow,name=name,number1=number1,number2=number2,number3=number3,number4=number4,number5=number5,bottle=bottle,accompanied=accompanied,ct=ct,lt=lt,wh=wh,transfer=transfer,fine=fine,daypay=daypay)
        db.session.add(keeping)
        db.session.commit()

    alldatas = Data.query.all()
    userps = request.form.getlist('userps')
    userps = userps[0]

    namer = []
    for psdata in alldatas:
        if psdata.ps == userps and psdata.name != None:
            namer.append(psdata.name)  
    namers = list(dict.fromkeys(namer))

    return render_template('record.html', alldatas=alldatas, userps=userps, namers=namers)

@app.route('/edit', methods=['POST'])
def calc():
    alldatas = Data.query.all()
    userps = request.form.getlist('userps')
    userps = userps[0]
    namer = []
    for alldata in alldatas:
        if alldata.ps == userps and alldata.name != None:
            namer.append(alldata.name)  
    namers = list(dict.fromkeys(namer))
    return render_template('edit.html', alldatas=alldatas, userps=userps, namers=namers)

@app.route('/pay', methods=['POST'])
def delete():
    alldatas = Data.query.all()
    userps = request.form.getlist('userps')
    userps = userps[0]
    
    month = request.form['send-month']
    day = request.form['send-day']
    name = request.form['send-name']

    for alldata in alldatas:
        if alldata.ps == userps and alldata.month != None:
            if (alldata.month == month):
                if (alldata.day == day):
                    if (alldata.name == name):
                        db.session.delete(alldata)
                        db.session.commit()
                    elif (name == "未指定"):
                        db.session.delete(alldata)
                        db.session.commit()
                elif (day == "未指定"):
                    if (alldata.name == name):
                        db.session.delete(alldata)
                        db.session.commit()
                    elif (name == "未指定"):
                        db.session.delete(alldata)
                        db.session.commit()
            elif (month == "未指定"):
                if (alldata.day == day):
                    if (alldata.name == name):
                        db.session.delete(alldata)
                        db.session.commit()
                    elif (name == "未指定"):
                        db.session.delete(alldata)
                        db.session.commit()
                elif (day == "未指定"):
                    if (alldata.name == name):
                        db.session.delete(alldata)
                        db.session.commit()

    alldatas = Data.query.all()
    namer = []
    for alldata in alldatas:
        if alldata.ps == userps and alldata.name != None:
            namer.append(alldata.name)  
    namers = list(dict.fromkeys(namer))

    return render_template('edit.html', alldatas=alldatas, userps=userps, namers=namers)

@app.route('/result', methods=['POST'])
def result():
    alldatas = Data.query.all()
    userps = request.form.getlist('userps')
    userps = userps[0]
    namer = []
    for alldata in alldatas:
        if alldata.ps == userps and alldata.name != None:
            namer.append(alldata.name)  
    namers = list(dict.fromkeys(namer))

    month = request.form['result-month']
    name = request.form['result-name']

    selectdatas = []
    for alldata in alldatas:
        if alldata.ps == userps and alldata.month != None:
            if (alldata.month == month):
                if (alldata.name == name):
                    selectdatas.append(alldata)
                elif (name == "未指定"):
                    selectdatas.append(alldata)
            elif (month == "未指定"):
                if (alldata.name == name):
                    selectdatas.append(alldata)
    alldatas = selectdatas
    
    sumwh = 0
    sumnumber1 = 0
    sumnumber2 = 0
    sumnumber3 = 0
    sumnumber4 = 0
    sumnumber5 = 0
    sumbottle = 0
    sumaccompanied = 0
    sumtransfer = 0
    sumfine = 0
    sumdaypay = 0
    for alldata in alldatas:
        sumwh = sumwh + float(alldata.wh)
        sumnumber1 = sumnumber1 + int(alldata.number1)
        sumnumber2 = sumnumber2 + int(alldata.number2)
        sumnumber3 = sumnumber3 + int(alldata.number3)
        sumnumber4 = sumnumber4 + int(alldata.number4)
        sumnumber5 = sumnumber5 + int(alldata.number5)
        sumbottle = sumbottle + int(alldata.bottle)
        sumaccompanied = sumaccompanied + int(alldata.accompanied)
        if (alldata.transfer == '〇'):
            sumtransfer = sumtransfer + 1
        sumfine = sumfine + int(alldata.fine)
        sumdaypay = sumdaypay + int(alldata.daypay)
    
    monwh = 0
    tuewh = 0
    wedwh = 0
    thuwh = 0
    friwh = 0
    satwh = 0
    sunwh = 0
    for alldata in alldatas:
        if (alldata.dow =='月'):
            monwh = monwh + float(alldata.wh)
        elif(alldata.dow =='火'):
            tuewh = tuewh + float(alldata.wh)
        elif(alldata.dow =='水'):
            wedwh = wedwh + float(alldata.wh)
        elif(alldata.dow =='木'):
            thuwh = thuwh + float(alldata.wh)
        elif(alldata.dow =='金'):
            friwh = friwh + float(alldata.wh)
        elif(alldata.dow =='土'):
            satwh = satwh + float(alldata.wh)
        elif(alldata.dow =='日'):
            sunwh = sunwh + float(alldata.wh)

    return render_template('edit.html', alldatas=alldatas, userps=userps, namers=namers,sumwh=sumwh,sumnumber1=sumnumber1,sumnumber2=sumnumber2,sumnumber3=sumnumber3,sumnumber4=sumnumber4,sumnumber5=sumnumber5,sumbottle=sumbottle,sumaccompanied=sumaccompanied,sumtransfer=sumtransfer,sumfine=sumfine,sumdaypay=sumdaypay,
    monwh=monwh,tuewh=tuewh,wedwh=wedwh,thuwh=thuwh,friwh=friwh,satwh=satwh,sunwh=sunwh,)        

@app.route('/back', methods=['POST'])
def back():
    alldatas = Data.query.all()
    userps = request.form.getlist('userps')
    userps = userps[0]
    namer = []
    for alldata in alldatas:
        if alldata.ps == userps and alldata.name != None:
            namer.append(alldata.name)  
    namers = list(dict.fromkeys(namer))
    return render_template('record.html', userps=userps, alldatas=alldatas,namers=namers)


if __name__=='__main__':
    app.run(debug=True)

