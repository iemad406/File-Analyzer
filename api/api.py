from flask import Flask, jsonify,request
import json
from flask_cors import CORS
import os
app = Flask(__name__)
CORS(app)
@app.route('/api',methods=['POST'])
def process():
    if not request.is_json:
        return jsonify({'status':'not ok','message':'you must probide json data'},400)
    data = request.get_json()
    path=data.get('path')
    if not os.path.exists(path):
        return jsonify({'status':'not ok','message':'your path does not exist'},400)
    pdf_count,doc_count,image_count=0,0,0
    for file in os.listdir(path):
        curr_file=os.path.join(path,file)
        if os.path.isfile(curr_file):
            if curr_file.endswith('.pdf'):
                pdf_count+=1
            elif curr_file.endswith('.docx'):
                doc_count+=1
            elif curr_file.endswith('.png') or curr_file.endswith('.jpeg'):
                image_count+=1
    return jsonify({'status':'ok','pdCount':pdf_count,'docxCount':doc_count,'imageCount':image_count},200)                    

if __name__ == '__main__':
    app.run(port=5001,debug=True)