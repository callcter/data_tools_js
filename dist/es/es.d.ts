/**
 * ES 返回的字符串转为 JS 对象
 * @param inputString "[{isPublisher=false, isTitle=false, level=0, index=1, isDate=false, text=中国基金报记者 张燕北}, {isPublisher=false, isTitle=false, level=0, index=2, isDate=false, text=12月18日午间，有消息称，在10年期国债利率在短短数日内连破三关后，央行出手约谈部分机构。债市午后显著调整，国债期货30年期主力合约一度跌超1%。}, {isPublisher=false, isTitle=false, level=0, index=3, isDate=false, text=多家金融机构被约谈}, {isPublisher=false, isTitle=false, level=0, index=4, isDate=false, text=据《金融时报》报道，12月18日上午，央行约谈了本轮债市行情中部分交易激进的金融机构，提出了一些要求，主要包括：要密切关注自身利率风险等风险状况，提高投研能力，加强债券投资稳健性；依法合规开展投资交易，央行近期已经严厉查处了一批涉嫌出借账户、扰乱市场价格、利益输送、内控缺失等违规行为的机构，同时正在全面摸排违规行为线索，后续将保持常态化的执法检查，对债券市场违法违规行为零容忍。}, {isPublisher=false, isTitle=false, level=0, index=5, isDate=false, text=Wind数据显示，国债期货午后下跌，收盘多数下跌，30年期主力合约跌0.44%，盘中一度跌1.75%；10年期主力合约跌0.1%，5年期主力合约跌0.02%，2年期主力合约持平。}, {isPublisher=false, isTitle=false, level=0, index=6, isDate=false, text=与此同时，银行间市场中，30年期国债活跃券“24特别国债06”收益率盘中大幅上行，并一度突破2%关口；10年期、5年期国债活跃券的收益率不同程度上行。}, {isPublisher=false, isTitle=false, level=0, index=7, isDate=false, text=针对央行约谈金融机构一事，华南一位固收基金经理表示，央行提示很有必要，收益率下降太快了，现在的定价已经隐含降息个20BP。“行情走得过快，实际资金面并没有那么宽松”。}, {isPublisher=false, isTitle=false, level=0, index=8, isDate=false, text=他进一步表示：“参照历史情况来看，这么快速下行过后基本会有一轮回调。”也有基金经理直言：“其实作为从业者，我们也不希望债券收益率下行过快，职业生涯（会）变短了。”}, {isPublisher=false, isTitle=false, level=0, index=9, isDate=false, text=短期内连破三个关口}, {isPublisher=false, isTitle=false, level=0, index=10, isDate=false, text=进入12月以来，以10年期国债为代表的现券收益率快速下行。}, {isPublisher=false, isTitle=false, level=0, index=11, isDate=false, text=12月9日至13日，债市迎来“超级周”：10年期国债收益率跌破2%，随后又迅速跌破1.9%和1.8%。目前，这一数据逼近1.7%整数关口。      汇添富基金认为，在充沛的流动性支持下，债券市场受益颇多。而前期地方债置换的供给压力逐渐释放完成，临近年末不少机构选择通过投资债券锁定当年收益或是提前布局明年“开门红”，买债力度有所加大，也从资金面为债市上涨提供了一定支撑。}, {isPublisher=false, isTitle=false, level=0, index=12, isDate=false, text=一些机构也坦言，这波行情之所以有亮眼表现，其中核心驱动因素之一就是市场提前兑现降息预期。}, {isPublisher=false, isTitle=false, level=0, index=13, isDate=false, text=“机构行为也会影响债市表现。年末机构提前布局谋求跨年配置机会的行为已启动，带动长债收益率再破前低。”一位固收投资人士表示。}, {isPublisher=false, isTitle=false, level=0, index=14, isDate=false, text=分析近期债市走势偏强的原因，鹏华基金混合资产投资部副总经理、基金经理汪坤表示，主要是短端在降息预期和央行买债的背景下，出现“抢跑”局面，长端在较高的期限利差之下，跟随短端下行。同时，基金券商积极参与年底交易行情，促使收益率下行，债券收益率和价格成反比。}, {isPublisher=false, isTitle=false, level=0, index=15, isDate=false, text=展望后市，有机构指出，当前机构的久期大多处于其历史持仓高位，利率债收益率向下交易空间被压缩。在对至少一次降息充分定价之后，市场或暂时持券观望，等待新的信号。}, {isPublisher=false, isTitle=false, level=0, index=16, isDate=false, text=制作：乔伊}, {isPublisher=false, isTitle=false, level=0, index=17, isDate=false, text=编辑：格林}, {isPublisher=false, isTitle=false, level=0, index=18, isDate=false, text=审核：许闻}]"
 * @returns [{}]
 */
declare function parseStringToObjectArray(inputString: string): any[];
