const path = require('path');
const Client = require('ssh2-sftp-client');
const sftp = new Client();

const remotePath = 'www';  // Remplacez par le chemin du répertoire distant
const localPath = path.join(__dirname, 'build');  // Remplacez 'build' par le répertoire local que vous voulez envoyer

async function main() {
  await sftp.connect({
	host: 'home463108797.1and1-data.host',
	port: '22',
	username: 'acc1197702566',
	password: 'qofdic-0basku-pyfjeW',
  });

  await sftp.uploadDir(localPath, remotePath);

  await sftp.end();
}

main().catch((err) => console.error(err.message));
